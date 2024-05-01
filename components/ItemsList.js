import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styles from '../styles/Item.module.css';
import { getItems } from '../api/itemsData';
// eslint-disable-next-line react/prop-types
export default function ItemsList({ itemsObj }) {
  const [itemz, setItemz] = useState([]);
  useEffect(() => {
    getItems().then(setItemz);
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {' '}
        {itemz?.map((item) => (
          // eslint-disable-next-line @next/next/link-passhref
          <>
            <Link passHref href="/items/[id]" as={`/items/${item.id}`}>
              <div className={styles.card}>
                <h3>{itemsObj.name} &rarr;</h3>
                <p>{itemsObj.description}</p>
                <p>{itemsObj.image}</p>
                <p>Price: ${itemsObj.price}</p>
                {/* <p>Category:{itemsObj.category_id.name}</p> */}
                <p>Size: {itemsObj.size}</p>
              </div>
            </Link>
          </>
        ))}
      </div>
    </div>
  );
}

ItemsList.propTypes = {
  itemsObj: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    category_id: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.bool.isRequired,
    }).isRequired,
    size: PropTypes.string.isRequired,
  }).isRequired,
};
