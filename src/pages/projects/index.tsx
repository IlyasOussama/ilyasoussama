import { getAllProjects } from "../../lib/api";
import Head from "next/head";
import ProjectType from "../../interfaces/project";

import AllProjects from "../../components/AllProjects";

type Props = {
  allProjects: ProjectType[];
};

const Projects = ({ allProjects }: Props) => {
  const heroPost = allProjects[0];
  const morePosts = allProjects.slice(1);

  return (
    <>
      <Head>
        <title>Feautured Projects</title>
      </Head>
      <div className="animate-[wiggle_1s_ease-in-out]">
        <AllProjects projects={allProjects} />
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const allProjects = getAllProjects([
    "name",
    "description",
    "projectImage",
    "slug",
  ]);

  return {
    props: { allProjects },
  };
};

export default Projects;
