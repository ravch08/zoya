import {
  Banner,
  BannerQuote,
  LatestPosts,
  Newsletter,
  PopularPosts,
} from "../utils/helper";

const Home = () => {
  return (
    <main>
      <Banner />
      <LatestPosts />
      <BannerQuote />
      <PopularPosts />
      <Newsletter />
    </main>
  );
};

export default Home;
