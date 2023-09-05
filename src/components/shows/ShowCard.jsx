const ShowCard = ({ id, image, name, summary }) => {
  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>

      <h1>{name}</h1>
      <p>
        {summary
          ? summary.split(" ").slice(0, 10).join(" ").replace(/<.*?>/g, "")
          : "No description found"}
        ...
      </p>

      <div>
        <a href={`/show/${id}`} target="_blank" rel="noreferrer">
          Read more
        </a>
        <button>Starred</button>
      </div>
    </div>
  );
};

export default ShowCard;
