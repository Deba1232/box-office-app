import ActorCard from "./ActorCard";

const ActorList = ({ actors }) => {
  return (
    <div>
      {actors.map((data) => (
        <ActorCard
          key={data.person.id}
          id={data.person.id}
          image={
            data.person.image
              ? data.person.image.medium
              : "/image-not-found.png"
          }
          name={data.person.name}
          gender={data.person.gender}
          country={data.person.country ? data.person.country.name : null}
          birthday={data.person.birthday}
          deathday={data.person.deathday}
        />
      ))}
    </div>
  );
};

export default ActorList;
