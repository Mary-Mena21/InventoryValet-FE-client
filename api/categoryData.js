import { clientCredentials } from '../utils/client';

const dbUrl = 'https://localhost:7191';

const endpoint = clientCredentials.databaseURL;

const getCategories = () =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/categories`, {
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
