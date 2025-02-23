import { motion } from "framer-motion";

const PrivacyPolicy = () => {
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
          Privacy Policy
        </motion.h1>

        <motion.p 
          className="text-lg text-center text-gray-700 dark:text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Your privacy is important to us. Learn how we collect, use, and protect your data.
        </motion.p>

        {/* Sections */}
        {privacyData.map((section, index) => (
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

const privacyData = [
  { title: "1. Information We Collect", content: "We collect personal data such as name, email, and usage data to improve our services." },
  { title: "2. How We Use Your Information", content: "Your data is used for account management, customer support, and website improvement." },
  { title: "3. Data Security", content: "We use encryption and secure servers to protect your data from unauthorized access." },
  { title: "4. Your Rights", content: "You can request data deletion or modification by contacting support@cods.site." }
];

export default PrivacyPolicy;
