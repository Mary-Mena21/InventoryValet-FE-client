//<<<<<<< itemId
// import { clientCredentials } from '../utils/client';

// const dbUrl = 'https://localhost:7191';

// const endpoint = clientCredentials.databaseURL;

// const getCategories = () =>
//   new Promise((resolve, reject) => {
//     fetch(`${endpoint}/categories`, {
//       method: 'GET',
//       headers: {
//         'content-type': 'application/json',
//       },
//=======
// displayItems
// const dbUrl = 'https://localhost:7191';

// const getAllCategories = () =>
//   new Promise((resolve, reject) => {
// fetch(`${dbUrl}/category`, {
//   method: 'GET',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// })
//   .then((response) => response.json())
//   .then((data) => {
//     if (data) {
//       resolve(Object.values(data));
//     } else {
//       resolve([]);
//     }
//   })
//   .catch(reject);
// });

// export default getAllCategories;
// =======

const dbUrl = 'https://localhost:7191';

const getCategories = () => new Promise((resolve, reject) => {
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
