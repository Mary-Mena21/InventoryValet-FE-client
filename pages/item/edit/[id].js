import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ItemForm from '../../../components/ItemForm';
import { getSingleItem } from '../../../api/itemsData';

const EditItem = () => {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSingleItem(id).then(setEditItem);
  }, [id]);
  return (
    <div>
      <h2>Edit Item</h2>
      <ItemForm itemObj={editItem} />
    </div>
  );
};

export default EditItem;
