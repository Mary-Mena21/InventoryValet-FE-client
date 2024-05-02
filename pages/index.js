import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { Button, Form } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { checkUser } from '../utils/auth';
import RegisterForm from '../components/RegisterForm';
// import getAllCategories from '../api/categoryData';
import { getItems } from '../api/itemsData';
import ItemCard from '../components/ItemCard';

// import ItemsList from '../components/ItemsList';

function Home() {
  const { user } = useAuth();
  const [authUser, setAuthUser] = useState();
  // const [dropdowns, setDropdowns] = useState([]);
  const [items, setItems] = useState([]);
  const getAllItems = () => {
    getItems().then(setItems);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onUpdate = () => {
    checkUser(user.uid).then((data) => setAuthUser(data[0]));
  };

  useEffect(() => {
    onUpdate();
    // getAllCategories();
    getAllItems();
  }, []);

  // const handleChange = (e) => {
  //   if (e.target.value === 'Select a Category') {
  //     getAllItems();
  //   } else {
  //     getItemsByCategory(e.target.value).then(setItems);
  //   }
  // };

  return (
    <>
      {authUser?.firebaseId === user?.uid ? (
        <>
          Hello world!
          <br />
          {/* <ItemsList /> */}
          <div className="d-flex flex-wrap justify-content-center">
            {items?.map((item) => (
              <ItemCard key={item.id} itemObj={item} onUpdate={getAllItems} />
            ))}
          </div>
        </>
      ) : (
        <RegisterForm user={user} onUpdate={onUpdate} />
      )}
    </>
  );
}

export default Home;
