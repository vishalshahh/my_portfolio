import React from 'react';
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ImminentAgentImg from "@/public/Imminent-Agent.png";
import StudentManagementSystemImg from "@/public/StudentManagementSystem.png";
import TwitterCloneImg from "@/public/TwitterClone.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full-Stack Developer",
    location: "New Delhi, India",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
  {
    title: "Data Analytics Process Automation (Intern) | Alteryx ",
    location: "Remote",
    description:
    "Identified and resolved data quality issues using Alteryx Designer, resulting in a 25% improvement in data accuracy and eliminating 80% of data-related errors in reporting.",
    icon: React.createElement(LuGraduationCap),
    date: "Sept 2023 - Nov 2023",
  },
  {
    title: "Java Development (Intern)",
    location: "Remote",
    description:
      "Deployed three Java projects including Time Conversion by Country, Library Book Issue and Return System, and Exam Seating Arrangement System, integrating PHP, HTML, CSS, JavaScript, MySQL, and jQuery for comprehensive functionality.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2023 - August 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Price Tracker With Integrated Chatbot",
    description:
      "Revitalized front-end development by leveraging Next.js and Tailwind CSS to create dynamic UI components.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind CSS", "Node.js"],
    imageUrl: ImminentAgentImg,
  },
  {
    title: "Studen Management System",
    description:
      "This is an Implementation of student attendace system to keep track of all the records regarding students Performance.",
    tags: ["HTML", "CSS", "JavaScript", "mySql", "Php"],
    imageUrl: StudentManagementSystemImg,
  },
  {
    title: "Twitter Clone",
    description:
      "Crafted a Twitter clone with TypeScript, Node.js, Next.js and  for a streamlined social media experience..",
    tags: ["Node.js", "GraphQL", "Prisma ORM", "TailwindCSS", "Redis"],
    imageUrl: TwitterCloneImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
  "Java",
  "C++"
] as const;
