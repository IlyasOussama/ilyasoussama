import ProjectCard from "./ProjectCard";
import type ProjectType from "../interfaces/project";

type Props = {
  projects: ProjectType[];
};

const AllProjects = ({ projects }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-16 lg:gap-x-8 gap-y-8 md:gap-y-8 mb-8">
      {projects.map((project) => (
        <ProjectCard
          key={project.name}
          projectName={project.name}
          techStack={project.techStach}
          projectLink={project.slug}
          projectImage={project.projectImage}
          projectDescription={project.description}
        />
      ))}
    </div>
  );
};

export default AllProjects;
