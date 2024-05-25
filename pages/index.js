/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { Button, Form } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { checkUser } from '../utils/auth';
import RegisterForm from '../components/RegisterForm';
// import getAllCategories from '../api/categoryData';
import { getItems } from '../api/itemsData';
// import ItemCard from '../components/ItemCard';
import SearchBar from '../components/SearchBar';
import ItemCard from '../components/ItemCard';

// import ItemsList from '../components/ItemsList';

function Home() {
  const { user } = useAuth();
  const [authUser, setAuthUser] = useState();
  // const [dropdowns, setDropdowns] = useState([]);
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [pagedResult, setPagedResult] = useState(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onUpdate = () => {
    checkUser(user.uid).then((data) => setAuthUser(data[0]));
  };

  useEffect(() => {
    onUpdate();
    getItems(page, pageSize)
      .then((data) => {
        setPagedResult(data.results);
        setItems(data.results);
      })
      .catch((error) => {
        console.error('Error fetching items:', error);
      });
  }, [page, pageSize]);

  // Handle page change
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  // Handle page size change
  const handlePageSizeChange = (event) => {
    setPageSize(parseInt(event.target.value, 5));
  };

  return (
    <>
      {authUser?.firebaseId === user?.uid ? (
        <><>
          <br />
          <SearchBar items={items} query={query} setQuery={setQuery} />
        </><div>
          {pagedResult && (
            <div>
              <div>
                {pagedResult.results?.map((item) => (
                  <>
                    <ItemCard itemObj={item} />

                  </>
                ))}
              </div>

              {/* Pagination controls */}
              <div>
                <button
                  type="button"
                  onClick={() => handlePageChange(page - 1)}
                  disabled={page <= 1}
                >
                  Previous
                </button>
                <span>Page {page} of {pagedResult.pageCount}</span>
                <button
                  type="button"
                  onClick={() => handlePageChange(page + 1)}
                  disabled={page >= pagedResult.pageCount}
                >
                  Next
                </button>
              </div>
              <div>
                <label htmlFor="pageSize">Page Size: </label>
                <select
                  id="pageSize"
                  value={pageSize}
                  onChange={handlePageSizeChange}
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                </select>
              </div>
            </div>
          )}
             </div>
        </>
      ) : (
        <RegisterForm user={user} onUpdate={onUpdate} />
      )}
    </>
  );
}

export default Home;
