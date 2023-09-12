import ShowCard from "./ShowCard";
import { useStarredShows } from "../../lib/useStarredShows";

const ShowList = ({ shows }) => {
  const [starredShows, dispatchStarred] = useStarredShows();

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
          isStarred={starredShows.includes(data.show.id)}
        />
      ))}
    </div>
  );
};

export default ShowList;
