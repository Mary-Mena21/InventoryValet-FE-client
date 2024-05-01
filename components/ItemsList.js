import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styles from '../styles/Item.module.css';

export default function ItemsList({ itemsObj }) {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <>
          <Link passHref href="/items/[id]" as={`/items/${itemsObj.id}`}>
            <div className={styles.card}>
              <h3>{itemsObj.name} &rarr;</h3>
              <p>{itemsObj.description}</p>
              <p>{itemsObj.image}</p>
              <p>Price: ${itemsObj.price}</p>
              <p>Category:{itemsObj.categoryId}</p>
              <p>Size: {itemsObj.size}</p>
            </div>
          </Link>
        </>
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
    price: PropTypes.number.isRequired,
    categoryId: PropTypes.number.isRequired,
    size: PropTypes.string.isRequired,
  }).isRequired,
};
