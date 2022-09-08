import Image from "next/image";
import Link from "next/link";
import UnstyledLink from "../Links/UnstyledLink";

type BlogCardProps = {
  postImage?: string;
  postTitle: string;
  postDescription?: string;
  postLink: string;
  creationDate: string;
  postViews: number;
  readingTime: number;
  tag: string;
} & React.ComponentPropsWithoutRef<"li">;

const BlogCardTwo = ({
  className,
  onClick,
  tag,
  creationDate,
  postImage,
  postDescription,
  postTitle,
  postViews,
  readingTime,
  postLink,
}: BlogCardProps) => {
  return (
    <div className="overflow-hidden bg-white rounded shadow dark:bg-gray-900 dark:shadow-gray-800">
      <div className="p-5">
        <div className="relative">
          <Link as={`/blog/${postLink}`} href="/blog/[slug] ">
            <a className="hover:underline block aspect-w-4 aspect-h-3">
              <img
                className="object-cover w-full h-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-3.jpg"
                alt=""
              />
            </a>
          </Link>

          <div className="absolute top-4 left-4">
            <span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full">
              {" "}
              {tag}{" "}
            </span>
          </div>
        </div>
        <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">
          {" "}
          {creationDate}{" "}
        </span>
        <p className="mt-5 text-2xl font-semibold">
          <Link
            as={`/blog/${postLink}`}
            href="/blog/[slug]"
            className="text-black dark:text-white"
          >
            {postTitle}
          </Link>
        </p>
        <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
          {postDescription}
        </p>
        <Link as={`/blog/${postLink}`} href="/blog/[slug]">
          <a className="animated-underline mt-2 inline-block font-medium">
            Continue Reading
          </a>
        </Link>
      </div>
    </div>
  );
};

export default BlogCardTwo;
