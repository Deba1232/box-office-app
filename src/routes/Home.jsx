import { useState } from "react";
import { useQuery } from "react-query";

import { searchShow, searchActor } from "../api/tvMaze";

import SearchForm from "../components/SearchForm";
import ShowList from "../components/shows/ShowList";
import ActorList from "../components/actors/ActorList";

const Home = () => {
  const [filter, setFilter] = useState("");

  const { data: searchData, error: apiDataError } = useQuery({
    queryKey: ["search", filter],
    queryFn: () =>
      filter.searchOption === "shows"
        ? searchShow(filter.searchStr)
        : searchActor(filter.searchStr),
    enabled: !!filter,
    refetchOnWindowFocus: false,
  });

  const onSearch = ({ searchStr, searchOption }) => {
    setFilter({ searchStr, searchOption });
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
