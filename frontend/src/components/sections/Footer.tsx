import { Link } from "react-router-dom";
import { SocialIcons, logoLight } from "../utils/helper";

const Footer = () => {
  return (
    <footer className="bg-footer py-8">
      <div className="container flex-between text-white text-xs font-light">
        <span>© 2023 ZOYA. All Rights Reserved.</span>
        <Link to="/">
          <img src={logoLight} alt="Zoya" width={80} />
        </Link>
        <SocialIcons />
      </div>
    </footer>
  );
};

export default Footer;
