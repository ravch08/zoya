import { Link, NavLink } from "react-router-dom";
import { SearchBar, logoDark } from "../utils/helper";

const Navbar = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <nav className="flex gap-12 items-center">
            <Link to="/">
              <img src={logoDark} alt="Zoya" className="w-[100px]" />
            </Link>
            <ul className="flex gap-4">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="about" className="nav-link">
                  ABOUT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="blogs" className="nav-link">
                  BLOGS
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="contact" className="nav-link">
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </nav>

          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
