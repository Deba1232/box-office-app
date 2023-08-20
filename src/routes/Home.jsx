import { useState } from "react";

import { searchShow } from "../api/tvMaze";

const Home = () => {
  const [searchStr, setSearchStr] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [apiDataError, setApiDataError] = useState(null);

  // console.log(searchData);

  const onSearchInput = (event) => {
    setSearchStr(event.target.value);
  };

  const onSearch = async (event) => {
    event.preventDefault();

    try {
      setApiDataError(null);

      const result = await searchShow(searchStr);
      setSearchData(result);
    } catch (error) {
      setApiDataError(error);
    }
  };

  const renderData = () => {
    if (apiDataError) {
      return <div>Error occured: {apiDataError.message}</div>;
    }

    if (searchData) {
      return searchData.map((data) => (
        <div key={data.show.id}>{data.show.name}</div>
      ));
    }

    return null;
  };

  return (
    <div>
      <form onSubmit={onSearch}>
        <input type="text" value={searchStr} onChange={onSearchInput} />
        <button type="submit" onClick={onSearch}>
          Search
        </button>
      </form>
      <div>{renderData()}</div>
    </div>
  );
};

export default Home;
