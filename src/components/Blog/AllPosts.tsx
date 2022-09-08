import BlogCardTwo from "./BlogCardTwo";
import type Post from "../../interfaces/post";

type Props = {
  posts: Post[];
};

const AllPosts = ({ posts }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-16 lg:gap-x-8 gap-y-8 md:gap-y-8 mb-8">
      {posts.map((post) => (
        <BlogCardTwo
          key={post.slug}
          postTitle={post.title}
          postImage={post.coverImage}
          postLink={post.slug}
          readingTime={13}
          postViews={400}
          postDescription={post.excerpt}
          tag="dev"
          creationDate="20/10/2022"
        />
      ))}
    </div>
  );
};

export default AllPosts;
