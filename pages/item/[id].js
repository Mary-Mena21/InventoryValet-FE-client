/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line @next/next/no-img-element
// eslint-disable-next-line import/no-extraneous-dependencies
// eslint-disable-next-line react-hooks/exhaustive-deps
import { useState, useEffect } from 'react';
import { Button, Image } from 'react-bootstrap';
// import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
// eslint-disable-next-line import/no-extraneous-dependencies
// import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { deleteSingleItem, getSingleItem } from '../../api/itemsData';
// import { useAuth } from '../../utils/context/authContext';
// npm i -S react-icons
// import { checkUser } from '../../utils/auth';

export default function ViewItemDetails() {
  const [itemDetails, setItemDetails] = useState([]);
  // const [setAuthUser] = useState({});
  // const { user } = useAuth();
  const router = useRouter();
  const { id } = router.query;

  const deleteItem = () => {
    if (window.confirm(`Are you sure you want to delete ${itemDetails.name}?`)) {
      deleteSingleItem(itemDetails.id).then(() => router.push('/'));
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getItem = () => {
    getSingleItem(id).then((data) => setItemDetails(data));
  };

  useEffect(() => {
    getItem();
    // checkUser(user.uid).then((data) => setAuthUser(data));
  }, [getItem]);

  return (
    <>
      <div>
        <div className="d-flex justify-content-end mt-5 mb-0">
          <Link href={`/item/edit/${itemDetails.id}`} passHref>
            <Button
              variant="info"
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                color: 'black',
              }}
            >
              EDIT
            </Button>
          </Link>
          <Button
            onClick={deleteItem}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              color: 'black',
            }}
            className="d-flex justify-content-end"
          >
            DELETE
          </Button>
        </div>
        <div className="mt-5 d-flex flex-wrap">
          <div className="d-flex flex-row">
            <div>
              <Image
                // src={itemDetails.image}
                src="https://via.placeholder.com/400"
                alt={itemDetails.description}
                style={{ width: '400px', height: '400px', border: '1px solid black' }}
              />
              <br />
              <br />
              {/* <Link href="/" passHref style={{ cursor: 'pointer', color: 'blue', hover: 'text-indigo-600' }}>
                <div>
                  <FaArrowAltCircleLeft className="mr-2" /> Back to Items Listing
                </div>
              </Link> */}
            </div>
            <div className="text-black ms-5 details align-self-center">
              <h2>{itemDetails.description}</h2>
              <p>{itemDetails.image}</p>
              <p>Price: ${itemDetails.price}</p>
              <p>Size:{itemDetails.size}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
