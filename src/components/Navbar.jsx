import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg justify-content-center sticky-top mi-navegador">
        <Link to="/" className="mx-2"> Home </Link> | <Link className="mx-2" to="/favoritos"> Favoritos </Link>
    </nav>
  );
};

export default Navbar;