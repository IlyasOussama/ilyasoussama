import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import UnstyledLink from "./Links/UnstyledLink";

type ProjectCardProps = {
  projectName: string;
  projectImage: string;
  projectDescription: string;
  projectLink: string;
  techStack?: string[];
} & React.ComponentPropsWithoutRef<"li">;

/*  */

export default function ProjectCard({
  projectDescription,
  projectName,
  techStack,
  projectLink,
  projectImage,
  className,
}: ProjectCardProps) {
  return (
    <div className="scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu overflow-hidden bg-white rounded shadow dark:bg-gray-900 dark:shadow-gray-800">
      <div className="p-5">
        <div className="relative">
          <a href="#" title="" className="block aspect-w-4 aspect-h-3">
            <Image
              className="object-cover w-full h-full"
              height={400}
              width={700}
              src={projectImage}
              alt=""
            />
          </a>
        </div>

        <p className="mt-5 text-2xl font-semibold">
          <a href="#" title="" className="text-black dark:text-white">
            {" "}
            {projectName}{" "}
          </a>
        </p>
        <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
          {projectDescription}
        </p>

        <Link as={`/projects/${projectLink}`} href="/projects/[slug]">
          <a className="animated-underline dark:aninated-underline-dark mt-2 inline-block font-medium">
            Learn More
          </a>
        </Link>
      </div>
    </div>
  );
}
