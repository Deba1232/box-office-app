import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

import { getShowById } from "../api/tvMaze";

const Show = () => {
  const { showId } = useParams();

  const { data: showData, error: apiFetchError } = useQuery({
    queryKey: ["show", showId],
    queryFn: () => getShowById(showId),
  });

  if (apiFetchError) {
    return <div>Error : {apiFetchError.message}</div>;
  }

  if (showData) {
    return <div>Show data: {showData.name}</div>;
  }

  return <div>Data loading...</div>;
};

export default Show;
