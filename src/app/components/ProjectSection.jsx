"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "IT QUIZ",
    description: "Simple quizzes to challenge your IT skills.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Mr22XX/it-quiz",
    previewUrl: "https://mr22xx.github.io/it-quiz/",
  },
  {
    id: 2,
    title: "Sistem Informasi Keuangan PT Palma Abadi",
    description: "Managing the financial inflow of the company",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Mr22XX/pkta",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Sistem Informasi Pengelolaan Data Keuangan dan Hasil Budidaya Ikan",
    description: "A system designed to manage financial records and fish farming production data.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Feuriee/SIP-KBI",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Film Sentiment Analysis with AI",
    description: "A web-based AI application to analyze movie review sentiment (Positive / Negative) using Machine Learning and Flask.",
    image: "/images/projects/4.png",
    tag: ["All", "ML"],
    gitUrl: "https://github.com/Mr22XX/filmsentimentanalysis",
    previewUrl: "https://mr22xx.pythonanywhere.com/",
  },
  {
    id: 5,
    title: "House Prediction Price",
    description: "A simple house price prediction using linear regression.",
    image: "/images/projects/5.png",
    tag: ["All", "ML"],
    gitUrl: "https://github.com/Mr22XX/House-Price-Prediction",
    previewUrl: "https://house-price-predictionhere.streamlit.app/",
  },
  {
    id: 6,
    title: "Smart Rute (Universitas Bengkulu)",
    description: "smart routing solution for the University of Bengkulu.",
    image: "/images/projects/6.png",
    tag: ["All", "ML"],
    gitUrl: "https://github.com/Mr22XX/SmartRute",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Coming Soon",
    description: "On Developing !",
    image: "/images/projects/comsoon.jpg",
    tag: ["All", "ML"],
    gitUrl: "/",
    previewUrl: "/",
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
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="ML"
          isSelected={tag === "ML"}
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