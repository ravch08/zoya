import { Banner, LatestPosts, Newsletter, PopularPosts } from "../utils/helper";

const Home = () => {
  return (
    <main>
      <Banner />
      <LatestPosts />
      <PopularPosts />
      <Newsletter />
    </main>
  );
};

export default Home;
