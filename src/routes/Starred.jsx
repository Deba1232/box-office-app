import { useQuery } from "react-query";

import ShowList from "../components/shows/ShowList";
import { useStarredShows } from "../lib/useStarredShows";
import { getMultipleShowsById } from "../api/tvMaze";
import { TextCenter } from "../components/commonStyles/TextCenter";

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
    return <TextCenter>Error occured: {apiDataError.message}</TextCenter>;
  }

  if (starredShows?.length === 0) {
    return <TextCenter> No shows were starred </TextCenter>;
  }

  if (starredShows?.length > 0) {
    return <ShowList shows={starredShows} />;
  }

  return <TextCenter>Loading...</TextCenter>;
};

export default Starred;
