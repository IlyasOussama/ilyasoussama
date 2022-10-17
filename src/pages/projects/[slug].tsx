import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/Layout/Container";
import { getProjectBySlug, getAllProjects } from "../../lib/api";
import Head from "next/head";
import markdownToHtml from "../../lib/markdownToHtml";
import type ProjectType from "../../interfaces/project";
import PostTitle from "../../components/Blog/PostTitle";
import ProjectHeader from "../../components/ProjectHeader";
import PostBody from "../../components/Blog/PostBody";

type Props = {
  project: ProjectType;
  moreProjects: ProjectType[];
  preview?: boolean;
};

export default function Project({ project, moreProjects, preview }: Props) {
  const router = useRouter();
  if (!router.isFallback && !project?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <div className="animate-[wiggle_1s_ease-in-out]">
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article className="mb-32">
            <Head>
              <title>{project.name} | Ilyas Oussama Blog</title>
            </Head>
            <ProjectHeader
              name={project.name}
              coverImage={project.projectLink}
            />
            <PostBody content={project.content} />
          </article>
        </>
      )}{" "}
    </div>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const project = getProjectBySlug(params.slug, [
    "title",
    "slug",
    "projectImage",
    "content",
  ]);
  const content = await markdownToHtml(project.content || "");

  return {
    props: {
      project: {
        ...project,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const projects = getAllProjects(["slug"]);

  return {
    paths: projects.map((project) => {
      return {
        params: {
          slug: project.slug,
        },
      };
    }),
    fallback: false,
  };
}
