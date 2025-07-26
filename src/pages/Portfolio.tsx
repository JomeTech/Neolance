import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import PageTransition from "../components/ui/PageTransition";
import SectionTitle from "../components/ui/SectionTitle";
import AnimatedCard from "../components/ui/AnimatedCard";

// Project categories
const categories = [
  "All",
  "Web Development",
  "UI/UX Design",
  "Backend APIs",
  "AI/ML",
  "DevOps",
  "Automation",
];

// Project data
const projects = [
  {
    title: "Timesculptai",
    category: "Web Development",
    image:
      "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Time Sculpt AI is an intelligent SSL monitoring tool that continuously checks the status of your website’s SSL certificates in real-time. It automatically detects issues like expirations or misconfigurations and instantly notifies the website owner, ensuring uninterrupted security and trust for your users.",
    technologies: ["React", "Express", "Tailwind CSS", "Paypal API"],
    client: "Web Developement",
    demoUrl: "timesculptai.com",
  },
  {
    title: "Printful API automation",
    category: "Automation",
    image:
      "https://images.pexels.com/photos/3471423/pexels-photo-3471423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Adding Product to Printful Store – Automation is a streamlined solution that automatically uploads and syncs products to your Printful store. Using data from a CSV or Excel file, it populates product details, assigns mockups, links variants, and organizes products into collections—saving time, reducing errors, and accelerating your e-commerce workflow.",
    technologies: ["python", "printful tool", "shopify"],
    demoUrl: "#",
  },
  {
    title: "PDF Generator – Tauri Desktop Application for Windows",
    category: "Web Development",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.MM2UqoDdth7QpkwSoK8ZTwHaE7%26cb%3Diwc2%26pid%3DApi&f=1&ipt=26dcf924fa9f0f805f7af1a6ed549c8f4856742f9b6ae780aecf8942e931360b&ipo=images",
    description:
      "PDF Generator – Tauri Desktop Application for Windows is a lightweight and efficient tool designed to generate structured PDF reports from your data. Built with Tauri for optimal performance and minimal system resource usage, it offers a seamless desktop experience with features like data parsing, real-time preview, and customizable report layouts—ideal for businesses and professionals who need fast, reliable PDF creation directly from their local files.",
    technologies: ["Tauri", "React", "TailwindCSS"],
    client: "Iwood Technologies",
    demoUrl: "#",
  },
  {
    title: "Puriflow",
    category: "UI/UX Design",
    image:
      "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description: "Puriflow is a water business company which based on africa",
    technologies: ["UI/UX", "Figma"],
    client: "Puriflow",
    demoUrl: "#",
  },
  {
    title: "SWARAM",
    category: "Web Developement",
    description:
      "Swaram is a cultural fest which is conducted in kongu engineering college",
    technologies: ["UI/UX", "Figma", "React", "Tailwind"],
    client: "Swaram team",
    demoUrl: "#",
  },
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-neolance-dark-purple/50"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-neolance-purple/20 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-neolance-blue/20 rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our{" "}
              <span className="text-neolance-cyan glow-text">Portfolio</span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Explore our successful projects and see how we've helped
              businesses achieve their digital goals.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="section-padding">
        <SectionTitle
          title="Our Work"
          subtitle="Browse through our portfolio of projects across various industries and technologies."
          centered
        />

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                filter === category
                  ? "bg-neolance-cyan text-neolance-dark font-medium"
                  : "bg-white/5 text-gray-300 hover:bg-white/10"
              }`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProjects.map((project, index) => (
            <AnimatedCard
              key={index}
              delay={index * 0.1}
              className="glass-effect rounded-xl overflow-hidden"
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neolance-dark to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-neolance-cyan font-medium mb-4">
                      {project.category}
                    </p>
                    <button
                      className="btn-secondary py-2 px-4 text-sm"
                      onClick={() => setSelectedProject(project)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </motion.div>

        {/* No Projects Found */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            className="bg-neolance-dark-blue rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-72 md:h-96 object-cover"
            />

            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold">
                    {selectedProject.title}
                  </h3>
                  <p className="text-neolance-cyan">
                    {selectedProject.category}
                  </p>
                </div>
                <button
                  className="text-gray-400 hover:text-white"
                  onClick={() => setSelectedProject(null)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h4 className="text-xl font-semibold mb-3">
                    Project Overview
                  </h4>
                  <p className="text-gray-300 mb-6">
                    {selectedProject.description}
                  </p>

                  <h4 className="text-xl font-semibold mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white/5 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="glass-effect p-4 rounded-lg">
                  <h4 className="text-xl font-semibold mb-3">
                    Project Details
                  </h4>

                  <div className="mb-4">
                    <p className="text-gray-400">Client:</p>
                    <p className="font-medium">{selectedProject.client}</p>
                  </div>

                  <div className="mb-4">
                    <p className="text-gray-400">Category:</p>
                    <p className="font-medium">{selectedProject.category}</p>
                  </div>

                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary py-2 w-full flex items-center justify-center gap-2"
                  >
                    View Live Demo <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </PageTransition>
  );
};

export default Portfolio;

