import { FlexGrid } from "../commonStyles/FlexGrid";
import ActorCard from "./ActorCard";
import ImgNotFoundSrc from "../../lib/image-not-found.png";

const ActorList = ({ actors }) => {
  return (
    <FlexGrid>
      {actors.map((data) => (
        <ActorCard
          key={data.person.id}
          id={data.person.id}
          image={data.person.image ? data.person.image.medium : ImgNotFoundSrc}
          name={data.person.name}
          gender={data.person.gender}
          country={data.person.country ? data.person.country.name : null}
          birthday={data.person.birthday}
          deathday={data.person.deathday}
        />
      ))}
    </FlexGrid>
  );
};

export default ActorList;
