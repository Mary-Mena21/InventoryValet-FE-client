import { clientCredentials } from '../utils/client';

const dbUrl = 'https://localhost:7191';
// const getItems = () =>
//   new Promise((resolve, reject) => {
//     fetch(`${dbUrl}/items`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         if (data) {
//           resolve(Object.values(data));
//         } else {
//           resolve([]);
//         }
//       })
//       .catch(reject);
//   });

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

const endpoint = clientCredentials.databaseURL;

const getItems = () =>
  new Promise((resolve, reject) => {
    fetch(`${dbUrl}/items`, {
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

const getSingleItem = (itemId) =>
  new Promise((resolve, reject) => {
    fetch(`${dbUrl}/items/${itemId}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

const createItem = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateItem = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${dbUrl}/items/${payload.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      // .then((response) => response.json())
      .then(resolve)
      .catch(reject);
    // .then((data) => resolve(data))
    // .catch(reject);
  });

const deleteItem = (firebaseKey) =>
  new Promise((resolve, reject) => {
    fetch(`${dbUrl}/items/${firebaseKey}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(resolve)
      .catch(reject);
  });

const deleteSingleItem = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${dbUrl}/items/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(resolve)
      .catch(reject);
  });

export { getItems, getSingleItem, createItem, updateItem, deleteItem, deleteSingleItem, itemsObj };

