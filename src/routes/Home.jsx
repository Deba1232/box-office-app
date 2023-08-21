import { useState } from "react";

import { searchShow, searchActor } from "../api/tvMaze";
import SearchForm from "../components/SearchForm";

const Home = () => {
  const [searchData, setSearchData] = useState([]);
  const [apiDataError, setApiDataError] = useState(null);

  // console.log(searchOption);

  const onSearch = async ({ searchStr, searchOption }) => {
    try {
      setApiDataError(null);

      if (searchOption === "shows") {
        const showData = await searchShow(searchStr);
        setSearchData(showData);
      }

      if (searchOption === "actors") {
        const actorData = await searchActor(searchStr);
        setSearchData(actorData);
      }
    } catch (error) {
      setApiDataError(error);
    }
  };

  const renderData = () => {
    if (apiDataError) {
      return <div>Error occured: {apiDataError.message}</div>;
    }

    if (searchData.length !== 0) {
      return searchData[0].show
        ? searchData.map((data) => (
            <div key={data.show.id}>{data.show.name}</div>
          ))
        : searchData.map((data) => (
            <div key={data.person.id}>{data.person.name}</div>
          ));
    }

    return null;
  };

  return (
    <div>
      <SearchForm onSearch={onSearch} />

      <div>{renderData()}</div>
    </div>
  );
};

export default Home;
