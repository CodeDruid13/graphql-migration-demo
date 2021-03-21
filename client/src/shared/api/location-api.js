const locationFetch = async (url) => {
  const resp = await fetch(url);
  const respData =  await resp.json();
  return respData;
};

export const getAll = async ({ page = 1 }) => {
  const data = await locationFetch(`https://rickandmortyapi.com/api/location?page=${page}`);
  return data
};

export const getById = async (id) => {
  return locationFetch(`https://rickandmortyapi.com/api/location/${id}`);
};