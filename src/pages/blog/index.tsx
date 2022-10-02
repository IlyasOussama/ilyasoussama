import { getAllPosts } from "../../lib/api";
import Head from "next/head";
import Post from "../../interfaces/post";

import AllPosts from "../../components/Blog/AllPosts";

type Props = {
  allPosts: Post[];
};

const Blog = ({ allPosts }: Props) => {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Head>
        <title>Ilyas Oussama Blog</title>
      </Head>
      <div className="animate-[wiggle_1s_ease-in-out]">
        {morePosts.length > 0 && <AllPosts posts={allPosts} />}
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};

export default Blog;
