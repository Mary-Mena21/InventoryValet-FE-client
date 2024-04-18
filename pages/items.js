import ItemsList from '../components/ItemsList';

export default function ItemsPage() {
  const itemz = {
    name: '',
    description: '',
    image: '',
    price: '',
    categoryId: '',
    size: '',
  };
  return (
    <ItemsList itemsObj={itemz} />
  );
}
