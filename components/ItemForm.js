import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';

const initialState = {
  name: '',
  description: '',
  image: '',
  price: '',
  categoryId: 0,
  size: '',
};

export default function ItemForm({ itemObj }) {
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormInput((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (existingBooking.id) {
    //   console.warn(formInput);
    //   updateFlightBooking(formInput).then(() => router.push('/Profile'));
    // } else {
    //   const payload = { ...formInput, customerId: user.id };
    //   createFlightBooking(payload).then(
    //     router.push('/Profile'),
    //   );
    // }
  };
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        {/* <Form.Control name="name" required value={currentItem.item} onChange={handleChange} type="text" /> */}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        {/* <Form.Control name="description" required value={currentItem.description} onChange={handleChange} type="text" /> */}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Image</Form.Label>
        {/* <Form.Control name="image" required value={currentItem.image} onChange={handleChange} type="text" /> */}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Price</Form.Label>
        {/* <Form.Control name="price" required value={currentItem.price} onChange={handleChange} type="text" /> */}
      </Form.Group>

      {/* <Form.Label>Select Category:</Form.Label>
      {categories.map((category) => (
        <div className="form-check" key={category.id}>
          <input
            className="form-check-input"
            type="checkbox"
            value={category.id}
            id={`category-${category.id}`}
            checked={selectedCategories.some((cat) => cat.id === category.id)}
            onChange={() => handleCheckboxChange(category.id)}
          />
          <label className="form-check-label" htmlFor={`category-${category.id}`}>
            {category.name}
          </label>
        </div>
      ))} */}

      <Form.Group className="mb-3">
        <Form.Label>Size</Form.Label>
        {/* <Form.Control name="size" required value={currentItem.size} onChange={handleChange} type="text" /> */}
      </Form.Group>

      <Form onSubmit={handleSubmit}>
        <Button variant="primary" type="submit">
          {itemObj.id ? 'Update' : 'Create'} Session
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
