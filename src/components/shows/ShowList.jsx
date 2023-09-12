import { useEffect, useReducer } from "react";
import ShowCard from "./ShowCard";

const usePersistentReducer = (reducer, initialState, localStorageKey) => {
  const [state, dispatch] = useReducer(reducer, initialState, (initial) => {
    const persistentValue = localStorage.getItem(localStorageKey);

    return persistentValue ? JSON.parse(persistentValue) : initial;
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }, [state, localStorageKey]);

  return [state, dispatch];
};

const starredShowReducer = (currentStarred, action) => {
  switch (action.type) {
    case "STAR":
      return currentStarred.concat(action.showId);
    case "UNSTAR":
      return currentStarred.filter((showId) => showId !== action.showId);

    default:
      return currentStarred;
  }
};

const ShowList = ({ shows }) => {
  const [starredShows, dispatchStarred] = usePersistentReducer(
    starredShowReducer,
    [],
    "starredShows"
  );

  const onStarClick = (showId) => {
    const isStarred = starredShows.includes(showId);

    if (isStarred) {
      dispatchStarred({ type: "UNSTAR", showId });
    } else {
      dispatchStarred({ type: "STAR", showId });
    }
  };

  return (
    <div>
      {shows.map((data) => (
        <ShowCard
          key={data.show.id}
          id={data.show.id}
          image={
            data.show.image ? data.show.image.medium : "/image-not-found.png"
          }
          name={data.show.name}
          summary={data.show.summary}
          onStarClick={onStarClick}
        />
      ))}
    </div>
  );
};

export default ShowList;
