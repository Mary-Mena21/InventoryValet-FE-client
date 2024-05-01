import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { Button, Form } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { checkUser } from '../utils/auth';
import RegisterForm from '../components/RegisterForm';
// import getAllCategories from '../api/categoryData';
import { getItems } from '../api/itemsData';

import ItemsList from '../components/ItemsList';

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
  }, [onUpdate]);

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
          Hello!
          <br />
          {items ? items.map((item) => (
            <ItemsList key={item.id} itemsObj={item} onUpdate={getAllItems} />
          )) : 'No inventory'}
        </>
      ) : (
        <RegisterForm user={user} onUpdate={onUpdate} />
      )}
    </>
  );
}

export default Home;
