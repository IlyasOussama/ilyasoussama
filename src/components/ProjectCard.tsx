import clsx from "clsx";
import Image from "next/image";

import UnstyledLink from "./Links/UnstyledLink";

type ProjectCardProps = {
  projectName: string;
  projectDescription: string;
  projectLink: string;
  techStack: string[];
} & React.ComponentPropsWithoutRef<"li">;

export default function ProjectCard({
  projectDescription,
  projectName,
  techStack,
  projectLink,
  className,
}: ProjectCardProps) {
  return (
    <li
      className={clsx(
        "project-card h-[450px] rounded-md md:w-full list-none shadow-sm",
        "border dark:border-gray-600",
        "scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu",
        "transition duration-100",
        "motion-reduce:hover:scale-100",
        "animate-shadow",
        className
      )}
    >
      <UnstyledLink
        href={projectLink}
        className="flex h-full flex-col items-start rounded-md p-4 focus:outline-none focus-visible:ring focus-visible:ring-primary-300"
      >
        <h4 className="text-lg font-semibold">{projectName}</h4>
        <p className="mb-auto text-sm text-gray-700 dark:text-gray-300">
          {projectDescription}
        </p>
        <div className="mt-2">
          {/* 
          <TechIcons techs={project.techs.split(',') as Array<TechListType>} /> */}
        </div>

        <Image
          src="/02.jpg"
          width={1200}
          height={550}
          alt="sakl daskl kldasl"
        />

        <p className="animated-underline mt-2 inline-block font-medium">
          See more →
        </p>
      </UnstyledLink>
    </li>
  );
}
