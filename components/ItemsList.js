import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styles from '../styles/Item.module.css';
// import { getItems } from '../api/itemsData';

// export default function ItmList({itemObject}) {
//     return <div>
//   </div>;
// }

// eslint-disable-next-line react/prop-types
export default function ItemsList({ itemsObj }) {
  // console.log(itemsObj);
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {' '}
        {itemsObj.map((item) => (
          // eslint-disable-next-line @next/next/link-passhref
          <Link href="/item/[id]" as={`/item/${item.id}`}>
            <div className={styles.card}>
              <h3>{item.name} &rarr;</h3>
              <p>{item.description}</p>
              <p>{item.image}</p>
              <p>Price: ${item.price}</p>
              <p>categoryId:{item.categoryId}</p>
              <p>Size: {item.size}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// export async function getStaticProps() {
//   const items = await getItems();
//   return {
//     props: {
//       items,
//     },
//     };

// }

// ItmList.defaultProps = {
//   name: '',
//   description: '',
//   image: '',
//   price: '',
//   categoryId: '',
//   size: '',
// };

ItemsList.propTypes = {
  itemsObj: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      categoryId: PropTypes.string.isRequired,
      size: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
