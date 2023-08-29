import { useState } from "react";

import { searchShow, searchActor } from "../api/tvMaze";
import SearchForm from "../components/SearchForm";
import ShowList from "../components/shows/ShowList";
import ActorList from "../components/actors/ActorList";

const Home = () => {
  const [searchData, setSearchData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);

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

    if (searchData?.length === 0) {
      return <div>No results</div>;
    }

    if (searchData) {
      return searchData[0].show ? (
        <ShowList shows={searchData} />
      ) : (
        <ActorList actors={searchData} />
      );
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
