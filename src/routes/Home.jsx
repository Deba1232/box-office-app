import { useState } from "react";
import { useQuery } from "react-query";

import { searchShow, searchActor } from "../api/tvMaze";
import { TextCenter } from "../components/commonStyles/TextCenter";

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
      return <TextCenter>Error occured: {apiDataError.message}</TextCenter>;
    }

    if (searchData?.length === 0) {
      return <TextCenter>No results</TextCenter>;
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
