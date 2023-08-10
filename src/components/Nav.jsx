import { Link } from "react-router-dom";

const LINKS = [
  {
    text: "Home",
    to: "/",
  },
  {
    text: "Starred",
    to: "/starred",
  },
];

const Nav = () => {
  const navItems = LINKS.map((item) => {
    return (
      <ul key={item.to}>
        <Link to={item.to}>
          <li>{item.text}</li>
        </Link>
      </ul>
    );
  });

  return <nav>{navItems}</nav>;
};

export default Nav;
