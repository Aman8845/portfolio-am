"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/14.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Aman8845",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Admin Dashboard",
    description: "Project 2 description",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Aman8845",
    previewUrl: "https://admin-dashboard-yt8h.vercel.app/",
  },
  // {
  //   id: 3,
  //   title: "Brand building application",
  //   description: "Project 3 description",
  //   image: "/images/projects/3.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "https://github.com/Aman8845",
  //   previewUrl: "https://agency-gamma-bay.vercel.app/",
  // },
  {
    id: 4,
    title: "Social Application",
    description: "Project 4 description",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Aman8845",
    previewUrl: "https://social-kappa-navy.vercel.app/",
  },
  {
    id: 5,
    title: "Resume Maker",
    description: "Project 5 description",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Aman8845",
    previewUrl: "https://resume-maker-six-ecru.vercel.app/",
  },
  {
    id: 5,
    title: "Brainwave Ai",
    description: "Project 6 description",
    image: "/images/projects/picture16.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Aman8845",
    previewUrl: "https://brainwave-ai-five.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
