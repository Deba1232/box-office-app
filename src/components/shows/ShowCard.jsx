import { Link } from "react-router-dom";

const ShowCard = ({ image, name, summary }) => {
  const shortSummary = summary
    .split(" ")
    .slice(0, 10)
    .join(" ")
    .replace(/<.*?>/g, "");

  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>

      <h1>{name}</h1>
      <p>{summary ? shortSummary : "No description found"}...</p>

      <div>
        <Link to="/">Read more</Link>
        <button>Starred</button>
      </div>
    </div>
  );
};

export default ShowCard;
