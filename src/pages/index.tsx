import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useTheme } from "next-themes";
import CopyToClipboard from "react-copy-to-clipboard";
import { getAllPosts } from "../lib/api";

import { FileTextIcon } from "@radix-ui/react-icons";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { useState } from "react";

import Button from "../components/Buttons/Button";
import AllPosts from "../components/Blog/AllPosts";
import ThemeButton from "../components/Buttons/ThemeButton";
import Navbar from "../components/Layout/Navbar";
import BlogCard from "../components/Blog/BlogCard";
import CustomLink from "../components/Links/CustomLink";
import UnstyledLink from "../components/Links/UnstyledLink";
import ProjectCard from "../components/ProjectCard";
import CustomTooltip from "../components/Tooltip";
import BlogCardTwo from "../components/Blog/BlogCardTwo";
import Link from "next/link";
import ButtonLink from "../components/Links/ButtonLink";

import Post from "../interfaces/post";

type Props = {
  allPosts: Post[];
};

const Home = ({ allPosts }: Props) => {
  const { theme, setTheme } = useTheme();

  const [copyStatus, setCopyStatus] = useState("Click the mail logo to copy");

  const homePosts: Post[] = [];
  const morePosts = allPosts.slice(1);
  homePosts.push(morePosts[0]);
  homePosts.push(morePosts[1]);
  homePosts.push(morePosts[2]);

  return (
    <>
      <Head>
        <title>Ilyas Oussama | Personal Website</title>
        <meta
          name="description"
          content="Ilyas Oussama Web Developer Website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen mx-6 xl:mx-auto max-w-6xl ">
        {/* <div className="mt-20 mx-4 sm:mx-auto grid">
          <h3 className="text-lg font-semibold mb-2">Hi ! I&#39;m Ilyas</h3>
          <p className="text-7xl font-bold mb-4">
            Full-stack software enginner
          </p>
          <h1 className="text-4xl font-bold">
            I build fast, secure and scalable web applications using modern web
            technologies.
          </h1>
        </div> */}
        <div className="mt-20 max-w-4xl text-left">
          <h2 className="text-4xl font-semibold">
            Hi ! I&#39;m Ilyas — A Full-Stack Software Enginner
          </h2>
          <p className="mt-2 font-normal text-4xl text-gray-500 dark:text-gray-400">
            I build fast, secure, and scalable web applications using modern web
            thechnologies
          </p>
        </div>

        <div className="mt-6">
          <ButtonLink className="mt-4 mr-2" href="#projects">
            Projects
          </ButtonLink>
          <ButtonLink className="mt-4" href="#blog">
            Blog
          </ButtonLink>
        </div>

        {/* <div className="mt-2 flex flex-row gap-4">
          <div className="flex items-center gap-1">
            <FileTextIcon />
            Resune
          </div>
          <div className="flex items-center gap-1">
            <GitHubLogoIcon />
            IlyasOussama
          </div>
        </div> */}

        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-6">Teck Stack</h2>
          <div className="">
            <div className="grid grid-row-2 md:grid-cols-2 gap-2 font-normal">
              <div className="text-center align-middle">
                <CustomTooltip content="javascript">
                  <Image
                    src="/javascript.svg"
                    width={96}
                    height={96}
                    alt="javascript"
                    className="scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu"
                  />
                </CustomTooltip>
                <CustomTooltip content="typescript">
                  <Image
                    src="/typescript.svg"
                    width={96}
                    height={96}
                    alt="javascript"
                    className="scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu"
                  />
                </CustomTooltip>
                <CustomTooltip content="react">
                  <Image
                    src="/react.svg"
                    width={96}
                    height={96}
                    alt="react"
                    className="scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu"
                  />
                </CustomTooltip>
                <CustomTooltip content="next.js">
                  {theme === "dark" ? (
                    <Image
                      src="/next-jsw.svg"
                      width={96}
                      height={96}
                      alt="twitter"
                      className="scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu"
                    />
                  ) : (
                    <Image
                      src="/next-js.svg"
                      width={96}
                      height={96}
                      alt="twitter"
                      className="scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu"
                    />
                  )}
                </CustomTooltip>
                <CustomTooltip content="tailwindcss">
                  <Image
                    src="/tailwindcss.svg"
                    width={96}
                    height={96}
                    alt="tailwindcss"
                    className="scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu"
                  />
                </CustomTooltip>
                <CustomTooltip content="prisma">
                  {theme === "dark" ? (
                    <Image
                      src="/prismaw.svg"
                      width={96}
                      height={96}
                      alt="twitter"
                      className="scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu"
                    />
                  ) : (
                    <Image
                      src="/prisma.svg"
                      width={96}
                      height={96}
                      alt="twitter"
                      className="scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu"
                    />
                  )}
                </CustomTooltip>
                <CustomTooltip content="nodejs">
                  <Image
                    src="/node-js.svg"
                    width={96}
                    height={96}
                    alt="nodejs"
                    className="scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu"
                  />
                </CustomTooltip>
                <CustomTooltip content="expressjs">
                  {theme === "dark" ? (
                    <Image
                      src="/express-jsw.svg"
                      width={96}
                      height={96}
                      alt="twitter"
                      className="scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu"
                    />
                  ) : (
                    <Image
                      src="/express-js.svg"
                      width={96}
                      height={96}
                      alt="twitter"
                      className="scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu"
                    />
                  )}
                </CustomTooltip>
              </div>
              <p className="align-middle text-xl">
                I write code in Javascript/Typescript depending on the project
                size, My framework of choice is Next.js, I use Tailwindcss for
                styling. <br />
                I use Prisma to cominucate with databases. <br /> When I need to
                build a server/API my go to is Nodejs (Expressjs/fastify).
              </p>
            </div>
          </div>

          <ButtonLink
            href="/techstack"
            variant="default"
            className="mt-8 ml-[50%] translate-x-[-50%]"
          >
            Learn More
          </ButtonLink>
        </section>

        <section id="blog" className="mt-20">
          <h2 className="text-3xl font-bold mb-6">Feautured Posts</h2>
          {homePosts.length > 0 && <AllPosts posts={homePosts} />}
          <ButtonLink className="mt-4" href="/blog">
            Read More
          </ButtonLink>
        </section>

        <div className="mt-20" id="projects">
          <h2 className="text-3xl font-bold mb-6">Feautured Projects</h2>
          <div className="flex flex-col gap-5 md:flex-row">
            <ProjectCard
              projectName="Project 01"
              projectDescription="das dkw erw mcxz ewqnm mnfsdew korw mcxvsd jrkwe nmrkwe jnkwer ncx"
              projectLink="project1"
              projectImage="/01.jpg"
            />
            <ProjectCard
              projectName="Project 02"
              projectDescription="das dkw erw mcxz ewqnm mnfsdew korw mcxvsd jrkwe nmrkwe jnkwer ncx"
              projectLink="project2"
              projectImage="/02.jpg"
            />
          </div>
          <ButtonLink className="mt-4" href="/projects">
            See more project
          </ButtonLink>
        </div>
        <a />

        <footer className="mb-8 mt-20 border-t border-gray-100 dark:border-gray-800 flex flex-col items-center">
          <p className="mt-8 mb-4 font-medium text-gray-600 dark:text-gray-300">
            Reach me out
          </p>
          <div>
            <CustomTooltip
              content={`{copyStatus} zghariilyasoussama@gmail.com`}
            >
              <CopyToClipboard
                text="zghariilyasoussama@gmail.com"
                onCopy={() => {
                  setCopyStatus("Copied to clipboard 🥳");
                  setTimeout(
                    () => setCopyStatus("Click the mail logo to copy"),
                    1500
                  );
                }}
              >
                <Image src="/gmail.svg" width={36} height={36} alt="gmail" />
              </CopyToClipboard>
            </CustomTooltip>
            <UnstyledLink
              className="inline-flex items-center justify-center rounded-sm focus:outline-none focus-visible:ring focus-visible:ring-primary-300"
              href="https://github.com/IlyasOussama"
            >
              <CustomTooltip content="@IlyasOussama">
                {theme === "dark" ? (
                  <Image
                    src="/githubw.svg"
                    width={36}
                    height={36}
                    alt="twitter"
                  />
                ) : (
                  <Image
                    src="/github.svg"
                    width={36}
                    height={36}
                    alt="github"
                  />
                )}
              </CustomTooltip>
            </UnstyledLink>
            <UnstyledLink
              className="inline-flex items-center justify-center rounded-sm focus:outline-none focus-visible:ring focus-visible:ring-primary-300"
              href="https://twitter.com/ilyaasOussama"
            >
              <CustomTooltip content="@ilyaasOussama">
                {theme === "dark" ? (
                  <Image
                    src="/twitter.svg"
                    width={36}
                    height={36}
                    alt="twitter"
                  />
                ) : (
                  <Image
                    src="/twitter.svg"
                    width={36}
                    height={36}
                    alt="twitter"
                  />
                )}
              </CustomTooltip>
            </UnstyledLink>
          </div>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
            © Ilyas Oussama {new Date().getFullYear()}
          </p>
        </footer>
        {/* 
        <UnstyledLink href="k.com">Click</UnstyledLink> */}
      </main>
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

export default Home;
