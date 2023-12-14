import { Link } from "react-router-dom";
import { ScrollTop, SocialIcons, logoLight } from "../utils/helper";

const Footer = () => {
  return (
    <footer className="bg-footer py-8">
      <div className="flex-between container text-xs font-light text-white">
        <span>© 2023 ZOYA. All Rights Reserved.</span>
        <Link to="/">
          <img src={logoLight} alt="Zoya" width={80} />
        </Link>
        <SocialIcons />
        <ScrollTop />
      </div>
    </footer>
  );
};

export default Footer;
