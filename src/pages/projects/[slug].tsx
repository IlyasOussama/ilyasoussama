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
import Button from "../../components/Buttons/Button";
import Link from "next/link";
import ButtonLink from "../../components/Links/ButtonLink";
import clsx from "clsx";

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

  console.log(project);
  return (
    <div className="animate-[wiggle_1s_ease-in-out]">
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article className="mb-32">
            <Head>
              <title>{project.name} | Ilyas Oussama Projects</title>
            </Head>
            <div>
              <div className="flex gap-2 mx-auto items-center justify-center">
                <Link href={project.liveLink}>
                  <a
                    target="_blank"
                    className={clsx(
                      "px-4 py-2 font-bold border border-gray-300 shadow-sm dark:border-gray-600 rounded-lg",
                      "scale-100 hover:scale-[1.03] active:scale-[0.97] motion-safe:transform-gpu transition duration-100",
                      "bg-green-500 text-gray-100 disabled:bg-gray-200  dark:text-gray-300 dark:disabled:bg-gray-700"
                    )}
                  >
                    Live
                  </a>
                </Link>
                <Link href={project.githubLink} target="_blank">
                  <a
                    target="_blank"
                    className={clsx(
                      "px-4 py-2 font-bold border border-gray-300 shadow-sm dark:border-gray-600 rounded-lg",
                      "scale-100 hover:scale-[1.03] active:scale-[0.97] motion-safe:transform-gpu transition duration-100",
                      "bg-white text-gray-600 disabled:bg-gray-200 dark:bg-gray-900 dark:text-gray-300 dark:disabled:bg-gray-700"
                    )}
                  >
                    Source code
                  </a>
                </Link>
              </div>

              <ProjectHeader
                name={project.name}
                coverImage={project.projectLink}
              />
              <PostBody content={project.content} />
            </div>
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
    "githubLink",
    "liveLink",
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
