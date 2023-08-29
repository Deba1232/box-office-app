import { Link } from "react-router-dom";

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
        <Link to={`/show/${id}`}>Read more</Link>
        <button>Starred</button>
      </div>
    </div>
  );
};

export default ShowCard;
