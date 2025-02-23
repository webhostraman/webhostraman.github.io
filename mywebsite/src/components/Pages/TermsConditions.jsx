import { motion } from "framer-motion";

const TermsConditions = () => {
  return (
    <section className="w-full min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        
        {/* Header */}
        <motion.h1
          className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Terms & Conditions
        </motion.h1>

        <motion.p 
          className="text-lg text-center text-gray-700 dark:text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Please read these terms carefully before using Cods.site.
        </motion.p>

        {/* Sections */}
        {termsData.map((section, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">{section.title}</h2>
            <p className="text-gray-700 dark:text-gray-300 mt-2">{section.content}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const termsData = [
  { title: "1. Acceptance of Terms", content: "By accessing this website, you agree to these terms and conditions." },
  { title: "2. User Responsibilities", content: "You are responsible for the content you upload and must not engage in illegal activities." },
  { title: "3. Limitation of Liability", content: "We are not responsible for any damages resulting from website usage." },
  { title: "4. Changes to Terms", content: "We reserve the right to modify these terms at any time." }
];

export default TermsConditions;
