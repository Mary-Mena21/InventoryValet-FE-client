import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemCard from './ItemCard';

export default function SearchBar({ items, query, setQuery }) {
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  // search by description or name
  const filterItems = items.filter((item) => item?.description.toLowerCase().includes(query.toLowerCase()) || item?.name.toLowerCase().includes(query.toLowerCase()));
  console.warn(filterItems);
  return (
    <>
      <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control type="text" placeholder="Search Items..." value={query} onChange={handleChange} className="m-2" />
          </Col>
        </Row>
      </Form>
      {/*       <input type="text" value={query} onChange={handleChange} placeholder="Search Items..." className="" /> */}
      <div className="d-flex flex-wrap justify-content-start">
        {filterItems?.map((filterItem) => (
          <ItemCard itemObj={filterItem} />
        ))}
      </div>
    </>
  );
}

SearchBar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
      price: PropTypes.number,
      categoryId: PropTypes.number,
      size: PropTypes.string,
    }),
  ),
  query: PropTypes.string,
  setQuery: PropTypes.func,
};

SearchBar.defaultProps = {
  items: [],
  query: '',
  setQuery: () => {},
};
