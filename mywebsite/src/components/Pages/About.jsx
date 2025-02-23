import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="w-full min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        
        {/* Heading */}
        <motion.h1 
          className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Cods.site
        </motion.h1>

        <motion.p 
          className="text-lg text-center text-gray-700 dark:text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Empowering students and beginners to create, share, and showcase their projects effortlessly with a beginner-friendly platform.
        </motion.p>

        {/* Sections */}
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">
              {section.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300">{section.description}</p>
            {section.list && (
              <ul className="list-disc list-inside mt-3 text-gray-700 dark:text-gray-300">
                {section.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}

        {/* Call-to-Action */}
        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-6">
            Join thousands of students and beginners already using Cods.site.
          </p>
          <Link 
            to="/create"
            className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition"
          >
            Create an Account
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

// Data for sections
const sections = [
  {
    title: "What is Cods.site?",
    description: "Cods.site is a free web hosting and website creation platform designed specifically for students and beginners. It provides all the tools you need to create professional-looking websites, share your projects, and showcase your skills without any hassle or hidden costs."
  },
  {
    title: "Why Cods.site is Ideal for College Students",
    description: "As a college student, you often need to work on academic projects, personal portfolios, or team assignments. Cods.site makes it simple and convenient to:",
    list: [
      "Host your academic projects online for free.",
      "Share project links with professors, peers, or recruiters effortlessly.",
      "Build personal portfolios to showcase your skills and achievements.",
      "Experiment with HTML, CSS, and JavaScript to strengthen your coding knowledge."
    ]
  },
  {
    title: "Why Cods.site is Perfect for Beginners",
    description: "If you’re new to web development, Cods.site provides a simple and accessible way to get started:",
    list: [
      "No prior experience is needed—just basic knowledge of HTML, CSS, or JavaScript.",
      "The platform includes a user-friendly code editor to help you learn and practice coding.",
      "Free hosting and subdomains make it easy to publish and share your work.",
      "Access helpful resources like documentation and FAQs to guide you every step of the way."
    ]
  },
  {
    title: "Key Features for Students and Beginners",
    list: [
      "20MB of free hosting to publish your projects.",
      "Customizable subdomains for sharing (e.g., yourname.cods.site).",
      "An easy-to-use code editor for building static websites.",
      "Responsive templates to help you design stunning websites quickly.",
      "Comprehensive support and resources for troubleshooting and learning."
    ]
  },
  {
    title: "Empowering Creativity and Growth",
    description: "At Cods.site, we believe everyone has the potential to create something incredible. Whether you’re submitting a class project, building your first portfolio, or testing your coding skills, our platform provides the perfect foundation to:",
    list: [
      "Learn by doing—practice your coding skills in a real-world environment.",
      "Collaborate and share your work with others.",
      "Gain confidence as you publish your projects online."
    ]
  }
];

export default About;
