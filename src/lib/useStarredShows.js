import { useEffect, useReducer } from "react";

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

export const useStarredShows = () => {
    return usePersistentReducer(
      starredShowReducer,
      [],
      "starredShows"
    );
}