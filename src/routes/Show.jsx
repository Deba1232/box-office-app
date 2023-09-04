import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { searchShowById } from "../api/tvMaze";

const useShowById = (showId) => {
  const [showData, setShowData] = useState(null);
  const [apiFetchError, setApiFetchError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await searchShowById(showId);
        setShowData(data);
        console.log(data);
      } catch (error) {
        setApiFetchError(error);
      }
    }

    fetchData();
  }, [showId]);

  return { showData, apiFetchError };
};

const Show = () => {
  const { showId } = useParams();
  const { showData, apiFetchError } = useShowById(showId);

  if (apiFetchError) {
    return <div>Error : {apiFetchError.message}</div>;
  }

  if (showData) {
    return <div>Show data: {showData.name}</div>;
  }

  return <div>Data loading...</div>;
};

export default Show;
