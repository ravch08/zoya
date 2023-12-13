import {
  Banner,
  BannerQuote,
  InstaPosts,
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
      <InstaPosts />
    </main>
  );
};

export default Home;
