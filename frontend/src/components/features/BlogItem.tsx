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
    <div className="mb-6 w-[30%]">
      <figure className="h-64 w-full overflow-hidden rounded-md">
        <img
          src={imgSrc}
          alt={heading}
          className="scale-100 transition-transform duration-500 ease-in-out hover:scale-105"
        />
      </figure>
      <div className="bg-white px-4 py-6 text-center text-xs">
        <span className="blog-superHeading">
          <Link to="#!">{category}</Link>
        </span>
        <h3 className="pt-1 text-3xl transition-colors duration-500 ease-in-out hover:text-primary-600">
          <Link to="#!">{heading}</Link>
        </h3>
        <p className="line-clamp-2 overflow-hidden py-4 text-sm font-light text-slate-600">
          {description}
        </p>
        <span className="sub-heading gap-1 text-xs text-gray-800 transition-colors duration-500 ease-in-out hover:text-primary-600">
          BY<Link to="#!">{author}</Link>
        </span>
      </div>
    </div>
  );
};

export default BlogItem;
