import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { SearchBar, logoDark } from "../utils/helper";

const Navbar = () => {
  const [sticky, setSticky] = useState("");

  const stickyHandler = () => {
    const stickyClass = window.scrollY > 150 ? "stickier" : "bg-white";
    setSticky(stickyClass);
  };

  useEffect(() => {
    window.addEventListener("scroll", stickyHandler);
    return () => window.removeEventListener("scroll", stickyHandler);
  }, []);

  return (
    <div className={sticky}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <nav className="flex items-center gap-12">
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
