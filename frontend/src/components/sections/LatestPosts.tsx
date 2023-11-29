import { blogPosts } from "../utils/data";
import { BlogItem, SectionHeading } from "../utils/helper";

const LatestPosts = () => {
  const latestPosts = blogPosts.filter((post) => post.latest);

  return (
    <section aria-labelledby="Latest Posts">
      <div className="container">
        <SectionHeading date="APRIL 19, 2021" heading="Latest Posts" />

        <div className="flex flex-wrap justify-between items-center gap-8">
          {latestPosts?.map((blogpost) => (
            <BlogItem
              key={blogpost.id}
              imgSrc={blogpost.imgSrc}
              author={blogpost.author}
              heading={blogpost.heading}
              category={blogpost.category}
              description={blogpost.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;
