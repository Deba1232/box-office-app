import ShowCard from "./ShowCard";
import ImgNotFoundSrc from "../../lib/image-not-found.png";
import { useStarredShows } from "../../lib/useStarredShows";

import { FlexGrid } from "../commonStyles/FlexGrid";

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
    <FlexGrid>
      {shows.map((data) => (
        <ShowCard
          key={data.show.id}
          id={data.show.id}
          image={data.show.image ? data.show.image.medium : ImgNotFoundSrc}
          name={data.show.name}
          summary={data.show.summary}
          onStarClick={onStarClick}
          isStarred={starredShows.includes(data.show.id)}
        />
      ))}
    </FlexGrid>
  );
};

export default ShowList;
