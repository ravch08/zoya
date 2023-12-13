// import { useState } from "react";
import { BlogAside, BlogMain, PageBanner, banner3 } from "../utils/helper";

const BlogsPage = () => {
  // const [blogsPerPage, setBlogsPerPage] = useState(6);

  return (
    <>
      <PageBanner
        title="Blogs"
        imgSrc={banner3}
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, dignissimos!"
      />
      <div className="container flex items-start justify-between gap-12 py-20">
        <BlogMain />
        <BlogAside />
      </div>
    </>
  );
};

export default BlogsPage;
