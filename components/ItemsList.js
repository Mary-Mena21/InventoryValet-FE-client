import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Item.module.css';
import { getItems } from '../api/itemsData';
// eslint-disable-next-line react/prop-types
export default function ItemsList() {
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
                <h3>{item.name} &rarr;</h3>
                <p>{item.description}</p>
                <p>{item.image}</p>
                <p>Price: ${item.price}</p>
                <p>categoryId:{item.categoryId}</p>
                <p>Size: {item.size}</p>
              </div>
            </Link>
          </>
        ))}
      </div>
    </div>
  );
}
