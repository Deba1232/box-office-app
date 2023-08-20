const BASE_URL = "https://api.tvmaze.com";

const apiData = async(queryString) => {
    const response = await fetch(`${BASE_URL}${queryString}`); 
    return response.json();
}

export const searchShow = async (query) =>
  await apiData(`/search/shows?q=${query}`);