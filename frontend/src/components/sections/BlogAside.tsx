import { Link } from "react-router-dom";
import { blogBanner, user } from "../utils/helper";

const BlogAside = () => {
  return (
    <aside className="w-[22%]">
      <div className="rounded-md bg-orange-50 px-8 py-12">
        <img src={user} alt="user" />

        <div className="mt-6 text-center">
          <h2 className="mb-4 font-sans text-primary-400">BLOGGER</h2>
          <p className="font-serif text-base">
            Welcome to my blog where I share my lifestyle tips, healthy snack
            ideas…
          </p>
        </div>
      </div>

      <div className="rounded-md bg-white px-8 py-12 text-center">
        <h2 className="mb-6 text-3xl">Categories</h2>
        <ul className="flex flex-col gap-2">
          <li>
            <Link to="#!" className="text-sm tracking-wider text-primary-400">
              BEAUTY{" "}
            </Link>
          </li>
          <li>
            <Link to="#!" className="text-sm tracking-wider text-primary-400">
              ENTERTAINMENT
            </Link>
          </li>
          <li>
            <Link to="#!" className="text-sm tracking-wider text-primary-400">
              HOME DECOR
            </Link>
          </li>
          <li>
            <Link to="#!" className="text-sm tracking-wider text-primary-400">
              INSPIRATION
            </Link>
          </li>
          <li>
            <Link to="#!" className="text-sm tracking-wider text-primary-400">
              INTERIOR
            </Link>
          </li>
          <li>
            <Link to="#!" className="text-sm tracking-wider text-primary-400">
              LIFESTYLE
            </Link>
          </li>
          <li>
            <Link to="#!" className="text-sm tracking-wider text-primary-400">
              TRAVEL
            </Link>
          </li>
        </ul>
      </div>

      <img src={blogBanner} alt="trending" />
    </aside>
  );
};

export default BlogAside;
