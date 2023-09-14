import { useQuery } from "react-query";

import { useStarredShows } from "../lib/useStarredShows";
import { getMultipleShowsById } from "../api/tvMaze";
import ShowList from "../components/shows/ShowList";

const Starred = () => {
  const [starredShowsIds] = useStarredShows();

  const { data: starredShows, error: apiDataError } = useQuery({
    queryKey: ["starred", starredShowsIds],
    queryFn: () =>
      getMultipleShowsById(starredShowsIds).then((result) =>
        result.map((show) => ({ show }))
      ),
    refetchOnWindowFocus: false,
  });

  if (apiDataError) {
    return <div>Error occured: {apiDataError.message}</div>;
  }

  if (starredShows?.length === 0) {
    return <div> No shows were starred </div>;
  }

  if (starredShows?.length > 0) {
    return <ShowList shows={starredShows} />;
  }

  return <div>Loading...</div>;
};

export default Starred;
