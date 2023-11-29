import { Link } from "react-router-dom";
import { BlogpostProps } from "../../types/types";

const BlogItem = ({
  imgSrc,
  author,
  heading,
  category,
  description,
}: BlogpostProps) => {
  return (
    <div className="w-[30%] mb-6">
      <figure className="w-full h-64 overflow-hidden rounded-md">
        <img
          src={imgSrc}
          alt={heading}
          className="scale-100 hover:scale-105 transition-transform ease-in-out duration-500"
        />
      </figure>
      <div className="bg-white px-4 py-6 text-center text-xs">
        <span className="blog-superHeading">
          <Link to="#!">{category}</Link>
        </span>
        <h3 className="text-3xl pt-1 hover:text-primary-600 transition-colors ease-in-out duration-500">
          <Link to="#!">{heading}</Link>
        </h3>
        <p className="text-sm py-4">{description}</p>
        <span className="sub-heading text-gray-800 text-xs gap-1 hover:text-primary-600 transition-colors ease-in-out duration-500">
          BY<Link to="#!">{author}</Link>
        </span>
      </div>
    </div>
  );
};

export default BlogItem;
