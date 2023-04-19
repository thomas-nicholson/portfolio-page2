import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { SiJavascript, SiReact, SiNextdotjs, SiNodedotjs, SiTailwindcss, SiGit, SiTypescript, SiHtml5, SiCss3, SiMysql, SiMongodb, SiAmazonaws, SiGraphql } from 'react-icons/si';

import { api } from "~/utils/api";

import ProjectCard from '../components/ProjectCard';


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>My Web Development Portfolio</title>
        <meta name="description" content="Web development portfolio showcasing my projects and skills" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome to My Portfolio</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h2 className="text-xl font-semibold mb-4">About Me</h2>
          <p>
            Welcome to my portfolio page, my name is Thomas Nicholson. I'm a 27 year old web developer.
            My interests include health, nutrition, education, business and politics.
            Currently I'm finalising my web development course and working on two big exciting projects
            Check out my portfolio, contact me, or peruse the links at the bottom.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="flex flex-col items-center">
              <SiHtml5 className="text-4xl text-orange-500" />
              <p className="mt-2">HTML</p>
            </div>
            <div className="flex flex-col items-center">
              <SiCss3 className="text-4xl text-blue-500" />
              <p className="mt-2">CSS</p>
            </div>
            <div className="flex flex-col items-center">
              <SiJavascript className="text-4xl text-yellow-400" />
              <p className="mt-2">JavaScript</p>
            </div>
            <div className="flex flex-col items-center">
              <SiTypescript className="text-4xl text-blue-500" />
              <p className="mt-2">TypeScript</p>
            </div>
            <div className="flex flex-col items-center">
              <SiReact className="text-4xl text-blue-500" />
              <p className="mt-2">React</p>
            </div>
            <div className="flex flex-col items-center">
              <SiNextdotjs className="text-4xl text-black" />
              <p className="mt-2">Next.js</p>
            </div>
            <div className="flex flex-col items-center">
              <SiNodedotjs className="text-4xl text-green-400" />
              <p className="mt-2">Node.js</p>
            </div>
            <div className="flex flex-col items-center">
              <SiTailwindcss className="text-4xl text-indigo-500" />
              <p className="mt-2">Tailwind CSS</p>
            </div>
            <div className="flex flex-col items-center">
              <SiGit className="text-4xl text-red-500" />
              <p className="mt-2">Git</p>
            </div>
            <div className="flex flex-col items-center">
              <SiMysql className="text-4xl text-red-500" />
              <p className="mt-2">SQL</p>
            </div>
            <div className="flex flex-col items-center">
              <SiMongodb className="text-4xl text-red-500" />
              <p className="mt-2">MongoDB</p>
            </div>
            <div className="flex flex-col items-center">
              <SiAmazonaws className="text-4xl text-red-500" />
              <p className="mt-2">AWS</p>
            </div>
          </div>

          <h2 className="text-xl font-semibold mt-8 mb-4">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="Project 1"
              description="A brief description of the project."
              imageUrl="/placeholder-image.jpg"
              technologies={['React', 'Next.js', 'Tailwind CSS']}
              githubUrl="https://github.com/your-username/project-1"
              liveUrl="https://www.example.com/project-1"
            />
            <ProjectCard
              title="Project 2"
              description="A brief description of the project."
              imageUrl="/placeholder-image.jpg"
              technologies={['React', 'Next.js', 'Tailwind CSS']}
              githubUrl="https://github.com/your-username/project-2"
              liveUrl="https://www.example.com/project-2"
            />
            <ProjectCard
              title="Project 3"
              description="A brief description of the project."
              imageUrl="/placeholder-image.jpg"
              technologies={['React', 'Next.js', 'Tailwind CSS']}
              githubUrl="https://github.com/your-username/project-3"
              liveUrl="https://www.example.com/project-3"
            />
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p>Contact: your-email@example.com</p>
        </div>
      </footer>
    </div>
  );
}
