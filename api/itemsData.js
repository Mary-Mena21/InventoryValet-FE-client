import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getAllItems = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/items`, {
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

const getSingleItem = (itemId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/items/${itemId}`, {
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
  fetch(`${endpoint}/items`, {
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

const updateItem = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/items/${payload.id}`, {
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

const deleteItem = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/items/${firebaseKey}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(resolve)
    .catch(reject);
});

export {
  getAllItems,
  getSingleItem,
  createItem,
  updateItem,
  deleteItem,
};
