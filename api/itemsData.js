const dbUrl = 'https://localhost:7191';
const getItems = () =>
  new Promise((resolve, reject) => {
    fetch(`${dbUrl}/items`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data) {
          resolve(Object.values(data));
        } else {
          resolve([]);
        }
      })
      .catch(reject);
  });

const itemsObj = () =>
  new Promise((resolve, reject) => {
    fetch(`${dbUrl}/items`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data) {
          resolve(Object.values(data));
        } else {
          resolve([]);
        }
      })
      .catch(reject);
  });

export default function getItemsByCategory() {
  return <div>categoryData</div>;
}

export { itemsObj, getItems, getItemsByCategory };
