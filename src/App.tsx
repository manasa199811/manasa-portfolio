import React from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-gray-900 text-white px-6 py-10">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="mb-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
          >
            Manasa Majoju
          </motion.h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            Frontend Developer | React | TypeScript | Real‑Time & Dashboard Systems
          </p>

          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Frontend Developer with 4+ years of experience building scalable web applications,
            real-time trading interfaces, and high-performance transaction dashboards.
            Strong focus on performance optimization, reusable architecture, and clean UI systems.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-24">
          <h2 className="text-3xl font-semibold mb-10 text-center">Core Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "JavaScript (ES6+)",
              "TypeScript",
              "React.js",
              "Next.js",
              "Redux / Toolkit",
              "React Query",
              "WebSockets",
              "Highcharts",
              "Tailwind CSS",
              "Jest / RTL",
              "REST APIs",
              "Performance Optimization",
            ].map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 p-4 rounded-2xl text-center text-gray-300 shadow-lg"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-24">
          <h2 className="text-3xl font-semibold mb-10 text-center">Professional Experience</h2>

          <div className="space-y-10">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-semibold mb-2">Freelance Frontend Developer</h3>
              <p className="text-gray-500 mb-4">July 2025 – Present | Hyderabad</p>
              <ul className="text-gray-400 space-y-2 list-disc list-inside">
                <li>Delivered production-ready React + TypeScript modules for client-facing SaaS applications.</li>
                <li>Developed dynamic invoice management pages with reusable component architecture.</li>
                <li>Integrated REST APIs using Axios and implemented structured state management with Redux.</li>
                <li>Improved UI responsiveness and resolved performance bottlenecks.</li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-semibold mb-2">Software Developer – AxiomIO</h3>
              <p className="text-gray-500 mb-4">Aug 2021 – Dec 2023</p>
              <ul className="text-gray-400 space-y-2 list-disc list-inside">
                <li>Built payment gateway dashboard visualizing transactional data using Highcharts.</li>
                <li>Developed dynamic pages for transaction and user management systems.</li>
                <li>Optimized rendering performance for large datasets and improved component reusability.</li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-semibold mb-2">Frontend Developer – CrimsonLake Technologies</h3>
              <p className="text-gray-500 mb-4">Jan 2024 – June 2025</p>
              <ul className="text-gray-400 space-y-2 list-disc list-inside">
                <li>Developed cross-device game showcase platform using responsive UI architecture.</li>
                <li>Implemented WebSocket integration for real-time updates in trading applications.</li>
                <li>Resolved critical production bugs and improved application stability.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-24">
          <h2 className="text-3xl font-semibold mb-10 text-center">Featured Work</h2>

          <div className="space-y-10">
            {[
              {
                title: "Real-Time Trading Interface",
                desc: "Engineered a responsive trading UI with WebSocket-based live market updates. Focused on minimizing re-renders and improving UI responsiveness under dynamic data flow.",
              },
              {
                title: "Transaction Analytics Dashboard",
                desc: "Designed scalable dashboard architecture for visualizing transactional data with optimized state management and modular chart components.",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl shadow-xl"
              >
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                <p className="text-gray-400 leading-relaxed">{project.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="text-center pb-10">
          <p className="text-gray-400">Open to Frontend Developer opportunities</p>
          <p className="text-gray-300 mt-2">manasamajoju11@gmail.com</p>
          <p className="text-gray-300">linkedin.com/in/manasa-majoju</p>
        </section>
      </div>
    </div>
  );
}
