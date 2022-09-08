import clsx from "clsx";
import { format } from "date-fns";
import Image from "next/image";

import { EyeOpenIcon, ClockIcon } from "@radix-ui/react-icons";

import UnstyledLink from "../Links/UnstyledLink";

type BlogCardProps = {
  postImage?: string;
  postTitle: string;
  postDescription?: string;
  postLink: string;
  creationDate: string;
  postViews: number;
  readingTime: number;
} & React.ComponentPropsWithoutRef<"li">;

const BlogCard = ({
  className,
  onClick,
  creationDate,
  postImage,
  postDescription,
  postTitle,
  postViews,
  readingTime,
  postLink,
}: BlogCardProps) => {
  return (
    <li
      className={clsx(
        "w-full h-[400px] rounded-md border border-gray-300 shadow-sm bg-white dark:border-gray-600 dark:bg-gray-900 list-none",
        "scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu",
        "transition duration-100",
        "motion-reduce:hover:scale-100",
        "animate-shadow",
        className
      )}
      onClick={onClick}
    >
      <UnstyledLink
        className="block h-full rounded-md focus:outline-none focus-visible:ring focus-visible:ring-primary-300"
        href={`/blog/${postLink}`}
      >
        <div>
          <Image
            src="/01.jpg"
            width={1200}
            height={550}
            alt={postTitle}
            className="pointer-events-none overflow-hidden rounded-t-md"
          />
        </div>
        <div className="p-4">
          <h4 className="text-gray-800 dark:text-gray-100 text-lg font-bold">
            {postTitle}
          </h4>
          <div className="mt-2 flex items-center justify-start gap-2 text-sm font-medium text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-1">
              <ClockIcon className="inline-block text-base" />
              <div>{readingTime}</div>
            </div>
            <div className="flex items-center gap-1">
              <EyeOpenIcon className="inline-block text-base" />
              <div>{postViews} views</div>
            </div>
          </div>
          <p className="mt-4 mb-2 text-sm text-gray-600 dark:text-gray-300">
            <span className="font-bold text-gray-800 dark:text-gray-100">
              {format(new Date(creationDate), "MMMM dd, yyyy")}
            </span>
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            {postDescription}
          </p>
        </div>
      </UnstyledLink>
    </li>
  );
};

export default BlogCard;
