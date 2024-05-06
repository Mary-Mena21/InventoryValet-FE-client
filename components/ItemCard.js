import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';

function ItemCard({ itemObj }) {
  return (
    <Card
      style={{
        width: '200 px',
        height: '250px',
        margin: '8px',
        backgroundColor: '#fff',
        color: 'black',
        boxShadow: '3px 3px 4px #9e9e9e',
        borderRadius: '18px',
      }}
    >
      <Link href={`/item/${itemObj.id}`} passHref>
        <div className="d-flex justify-content-start" style={{ padding: '10px 10px 0px 10px', gap: '2rem' }}>
          <Card.Img
            variant="top"
            // src={itemObj.image}
            src="https://via.placeholder.com/200"
            alt="Item Picture"
            style={{ height: '200px', width: '200px' }}
          />
          <Card.Title className="align-self-center text-center fs-4">{itemObj.description}</Card.Title>
        </div>
      </Link>
      <Link href={`/item/edit/${itemObj.id}`} passHref>
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
