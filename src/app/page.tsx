import LatestBlogs from "@/components/latestBlogs/LatestBlogs";
import Banner from "@/components/banner/Banner";

const HomePage = async () => {

  const res = await fetch('http://localhost:5000/blogs', {
    next: {
      revalidate: 30
    }
  })
  const blogs = await res.json()
  return (
    <>
      <Banner />
      <LatestBlogs blogs={blogs} />
    </>
  );
};

export default HomePage;
