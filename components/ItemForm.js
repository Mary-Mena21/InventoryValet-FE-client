import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { createItem, updateItem } from '../api/itemsData';
import getCategories from '../api/categoryData';

const initialState = {
  name: '',
  description: '',
  image: '',
  price: '',
  categoryId: 0,
  size: '',
};

export default function ItemForm({ itemObj }) {
  const router = useRouter();
  const [formInput, setFormInput] = useState([]);
  const [categories, setCategories] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (itemObj.id) {
      updateItem(formInput).then(() => router.push('/'));
    } else {
      const payload = { ...formInput };
      createItem(payload).then(
        router.push('/'),
      );
    }
  };
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control name="name" required value={formInput.name} onChange={handleChange} type="text" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control name="description" required value={formInput.description} onChange={handleChange} type="text" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Image</Form.Label>
        <Form.Control name="image" required value={formInput.image} onChange={handleChange} type="text" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Price</Form.Label>
        <Form.Control name="price" required value={formInput.price} onChange={handleChange} type="text" />
      </Form.Group>

      <Form.Label>Select Category:</Form.Label>
      <Form.Group className="floatingSelect">
        <Form.Label>Category</Form.Label>
        <Form.Select
          name="categoryId"
          onChange={handleChange}
          className="mb-3"
          value={formInput.categoryId}
          required
        >
          <option value="">Select a Category</option>
          {categories.map((category) => (
            <option
              key={category.id}
              value={category.id}
            >
              {category.label}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Size</Form.Label>
        <Form.Control name="size" required value={formInput.size} onChange={handleChange} type="text" />
      </Form.Group>

      <Form onSubmit={handleSubmit}>
        <Button variant="primary" type="submit">
          {itemObj.id ? 'Update' : 'Create'} Item
        </Button>
      </Form>
    </>
  );
}

ItemForm.propTypes = {
  itemObj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string,
    category_id: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
    size: PropTypes.string,
  }),
};

ItemForm.defaultProps = {
  itemObj: initialState,
};
