const baseURL = process.env.EXPO_IP;

function fetchRequest(path, options) {
  return fetch(baseURL + path, options)
    .then((res) => (res.status <= 400 ? res : Promise.reject))
    .then((res) => (res.status === 204 ? res : res.json()))
    .catch((error) => {
      console.log(`Error fetching ${path}`, error); // eslint-disable-line no-console
    });
}

function getPlants() {
  return fetchRequest('/plants');
}

function findPlant(name) {
  return fetchRequest(`/plants/${name}`);
}

function getUserPlants() {
  return fetchRequest('/userplants');
}

function updateNextWater(id, body) {
  return fetchRequest(`/userplants/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
}

function deleteUserPlant(id) {
  return fetchRequest(`/userplants/${id}`, {
    method: 'DELETE',
  });
}

function postPlant(body) {
  return fetchRequest('/userplants', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
}

module.exports = {
  getPlants,
  findPlant,
  postPlant,
  getUserPlants,
  updateNextWater,
  deleteUserPlant,
};
