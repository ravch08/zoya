import { Link } from "react-router-dom";
import { ButtonProps } from "../../types/types";

const Button = ({ btnText, target }: ButtonProps) => {
  return (
    <Link
      to={target}
      className="mt-8 inline-block bg-gray-900 px-12 py-4 text-xs text-white duration-500 ease-in-out hover:bg-gray-700"
    >
      {btnText}
    </Link>
  );
};

export default Button;
