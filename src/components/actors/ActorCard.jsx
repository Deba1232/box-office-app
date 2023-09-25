import { SearchCard, SearchImgWrapper } from "../commonStyles/SearchCardStyle";

const ActorCard = ({ image, name, gender, country, birthday, deathday }) => {
  return (
    <SearchCard>
      <SearchImgWrapper>
        <img src={image} alt={name} />
      </SearchImgWrapper>

      <h1>
        {name} {gender && `(${gender})`}
      </h1>

      <p>{country ? `Comes from ${country}` : `No country known`}</p>
      <p>{birthday && `Born ${birthday}`}</p>
      <p>{deathday ? `Died ${deathday}` : "Alive"}</p>
    </SearchCard>
  );
};

export default ActorCard;
