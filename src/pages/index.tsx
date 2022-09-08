import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useTheme } from "next-themes";
import { getAllPosts } from "../lib/api";

import { FileTextIcon } from "@radix-ui/react-icons";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

import Button from "../components/Buttons/Button";
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

const Home: NextPage = () => {
  const { theme, setTheme } = useTheme();

  const Tech = ["qb", "ss"];
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
      <main className="h-screen max-w-6xl mx-auto ">
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
          <Button variant="cta" className="mr-2">
            Projects
          </Button>
          <Button variant="default">Blog</Button>
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

        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-6">Teck Stack</h2>
          <div className="">
            <div className="grid grid-cols-2 gap-2 font-normal">
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
                    />
                  ) : (
                    <Image
                      src="/next-js.svg"
                      width={96}
                      height={96}
                      alt="twitter"
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
                    />
                  ) : (
                    <Image
                      src="/prisma.svg"
                      width={96}
                      height={96}
                      alt="twitter"
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
                    />
                  ) : (
                    <Image
                      src="/express-js.svg"
                      width={96}
                      height={96}
                      alt="twitter"
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
            {/* 
            <div className="grid grid-cols-2 gap-6">
              <p className="align-middle">
                When I need to build a server I usualy go the Nodejs Express
                route.
              </p>
              <div className="text-center align-middle">
                <Image
                  src="/node-js.svg"
                  className="cursor-pointer"
                  width={96}
                  height={96}
                  alt="typescript"
                />
                <Image
                  src="/express-js.svg"
                  width={96}
                  height={96}
                  alt="typescript"
                />
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="text-center align-middle">
                <Image
                  src="/postgresql.svg"
                  className="cursor-pointer"
                  width={96}
                  height={96}
                  alt="typescript"
                />
                <Image
                  src="/mongodb.svg"
                  width={96}
                  height={96}
                  alt="typescript"
                />
                <Image
                  src="/prisma.svg"
                  width={96}
                  height={96}
                  alt="typescript"
                />
              </div>
              <p className="align-middle">
                I work with both relational and norelational databases,
                depending on the need, I use prisma to communicate with the
                database.
              </p>
            </div> */}
          </div>

          <ButtonLink
            href="/teck-stack"
            variant="default"
            className="mt-8 ml-[50%] translate-x-[-50%]"
          >
            Learn More
          </ButtonLink>
          {/* <p className="mt-4 text-xl">
            I write code in javascript/typescript depending on the project size,
            My framework of choice is nextjs, I like to use tailwindcss for
            styling. <br /> When I need to build a server outside of nextjs
            world I go the nodejs and express/fastify route. <br /> Prisma is
            the solution of choise when comunicating with databases
          </p> */}
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-6">Feautured Posts</h2>
          <div className="grid gap-5 grid-cols-3">
            <BlogCardTwo
              postImage="/01,jpg"
              postTitle="Blog Post 01"
              postLink="nnn.com"
              creationDate="10/02/2022"
              postViews={300}
              readingTime={12}
              postDescription="aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla"
              tag="development"
            />
            <BlogCardTwo
              postImage="/01,jpg"
              postDescription="aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla"
              postTitle="Blog Post 02"
              postLink="nnn.com"
              creationDate="10/02/2022"
              postViews={300}
              readingTime={12}
              tag="development"
            />
            <BlogCardTwo
              postImage="/01,jpg"
              postDescription="aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla"
              postTitle="Blog Post 03"
              postLink="nnn.com"
              creationDate="10/02/2022"
              postViews={300}
              readingTime={12}
              tag="development"
            />
            {/* <BlogCard
              postTitle="Blog Post Title"
              postDescription="llds dw meweqw ewmq,dxzc k;lrwem m,fdsew ewm, llds dw meweqw ewmq,dxzc k;lrwem m,fdsew ewm, "
              postLink="gds.com"
              creationDate="10/12/2022"
              readingTime={20}
              postViews={500}
            /> */}
            {/* <BlogCard
              postTitle="Blog Post Title"
              postDescription="llds dw meweqw ewmq,dxzc k;lrwem m,fdsew ewm, llds dw meweqw ewmq,dxzc k;lrwem m,fdsew ewm,"
              postLink="gds.com"
              creationDate="10/12/2022"
              readingTime={20}
              postViews={500}
            />
            <BlogCard
              postTitle="Blog Post Title"
              postDescription="llds dw meweqw ewmq,dxzc k;lrwem m,fdsew ewm, llds dw meweqw ewmq,dxzc k;lrwem m,fdsew ewm,"
              postLink="gds.com"
              creationDate="10/12/2022"
              readingTime={20}
              postViews={500}
            /> */}
          </div>
          <ButtonLink className="mt-4" href="/blog">
            Read More
          </ButtonLink>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-6">Feautured Projects</h2>
          <div className="flex flex-row gap-5">
            <div className="overflow-hidden bg-white rounded shadow dark:bg-gray-900 dark:shadow-gray-800">
              <div className="p-5">
                <div className="relative">
                  <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                    <Image
                      className="object-cover w-full h-full"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-3.jpg"
                      alt=""
                    />
                  </a>

                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full">
                      {" "}
                      Development{" "}
                    </span>
                  </div>
                </div>
                <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">
                  {" "}
                  May 12, 2020{" "}
                </span>
                <p className="mt-5 text-2xl font-semibold">
                  <a href="#" title="" className="text-black dark:text-white">
                    {" "}
                    5 Productivity tips to write faster at morning.{" "}
                  </a>
                </p>
                <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
                <a
                  href="#"
                  title=""
                  className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-gray-900 dark:text-white transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600"
                >
                  Continue Reading
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="overflow-hidden bg-white rounded shadow dark:bg-gray-900 dark:shadow-gray-800">
              <div className="p-5">
                <div className="relative">
                  <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                    <Image
                      className="object-cover w-full h-full"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-3.jpg"
                      alt=""
                    />
                  </a>

                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full">
                      {" "}
                      Development{" "}
                    </span>
                  </div>
                </div>
                <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">
                  {" "}
                  May 12, 2020{" "}
                </span>
                <p className="mt-5 text-2xl font-semibold">
                  <a href="#" title="" className="text-black dark:text-white">
                    {" "}
                    5 Productivity tips to write faster at morning.{" "}
                  </a>
                </p>
                <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </p>
                <a
                  href="#"
                  title=""
                  className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-gray-900 dark:text-white transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600"
                >
                  Continue Reading
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* <ProjectCard
              projectLink="qq.com"
              projectName="Project klm"
              projectDescription="dakls ewkel ewkql fmvcl fer ope rem vdre wre dsc ekq; ewoc rew, dskewm csd"
              techStack={Tech}
            />
            <ProjectCard
              projectLink="qq.com"
              projectName="Project klm"
              projectDescription="dakls ewkel ewkql fmvcl fer ope rem vdre wre dsc ekq; ewoc rew, dskewm csd"
              techStack={Tech}
            /> */}
            {/* <ProjectCard
              projectLink="qq.com"
              projectName="Project klm"
              projectDescription="dakls ewkel ewkql fmvcl fer ope rem vdre wre dsc ekq; ewoc rew, dskewm csd"
              techStack={Tech}
            /> */}
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

export default Home;
