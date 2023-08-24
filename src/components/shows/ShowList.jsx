import ShowCard from "./ShowCard";

const ShowList = ({ shows }) => {
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
        />
      ))}
    </div>
  );
};

export default ShowList;
