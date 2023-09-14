const BASE_URL = "https://api.tvmaze.com";

const apiData = async (queryString) => {
  const response = await fetch(`${BASE_URL}${queryString}`);
  return response.json();
};

export const searchShow = (query) => apiData(`/search/shows?q=${query}`);

export const searchActor = (query) => apiData(`/search/people?q=${query}`);

export const getShowById = (showId) =>
  apiData(`/shows/${showId}?embed[]=seasons&embed[]=cast`);

export const getMultipleShowsById = async (showIdArray) => {
  const promises = showIdArray.map((id) => apiData(`/shows/${id}`));

  return await Promise.all(promises);
};
