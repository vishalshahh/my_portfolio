"use client";

import React from 'react'
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      As an aspiring full-stack web developer pursuing a B.Tech in {" "}
        <span className="font-medium">Computer Science Engineering</span> at G.L Bajaj Institute of Technology & Management, Greater Noida. I have embarked on a journey to pursue my passion for programming. Enrolling in a multiple coding bootcamps has equipped me with the skills in{" "}
        <span className="font-medium">full-stack web development</span>.{" "} and I find immense satisfaction in the problem-solving aspect of programming. {" "}
        <span className="italic">My primary stack includes <span className="font-medium">
          Java, React, Next.js, Node.js, and MongoDB </span></span> {" "}with additional familiarity in <span className="font-medium">
          TypeScript and Prisma. </span> Eager to expand my repertoire, I am constantly seeking opportunities to familiarize myself with new technologies. Currently, I am actively seeking a full-time position as a software developer.{" "} </p>
          <p>
          Outside of coding, I find joy in gaming, movies, and the intellectual challenge of chess. Moreover, I am devoted to continuous learning, and I am currently immersing myself in the realms of Docker and Kubernetes.
      </p>
    </motion.section>
  );
}
