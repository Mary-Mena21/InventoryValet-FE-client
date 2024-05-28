import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

function ItemCard({ itemObj }) {
  return (
    <Card
      style={{
        height: '120px',
        margin: '8px',
        backgroundColor: '#fff',
        color: 'black',
        boxShadow: '3px 3px 4px #9e9e9e',
        borderRadius: '10px',
        // Width: '500 px',
        border: '1px solid gray',
        cursor: 'pointer',
      }}
    >
      <Link href={`/item/${itemObj.id}`} passHref>
        <div className="d-flex justify-content-start" style={{ padding: '10px', gap: '10px', width: '260px' }}>
          <Card.Img
            variant="top"
            src="https://via.placeholder.com/100"
            // src={itemObj.image}
            alt="Item Picture"
            style={{ height: '100px', width: '100px' }}
          />
          <Card.Title className="align-self-center text-center fs-6">{itemObj.description}</Card.Title>
        </div>
      </Link>
      {/* <Link href={`/item/edit/${itemObj.id}`} passHref>
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
      </Link> */}
    </Card>
  );
}

export default ItemCard;

ItemCard.propTypes = {
  itemObj: PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    size: PropTypes.string,
  }).isRequired,
};
