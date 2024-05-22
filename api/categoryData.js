const dbUrl = 'https://localhost:7191';

const getCategories = () =>
  new Promise((resolve, reject) => {
    fetch(`${dbUrl}/categories`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          resolve(Object.values(data));
        } else {
          resolve([]);
        }
      })
      .catch(reject);
  });

export default getCategories;
