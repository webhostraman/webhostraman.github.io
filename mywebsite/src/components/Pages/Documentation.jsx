import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { UserPlus, LogIn, Code, Upload, BookOpen, LifeBuoy } from "lucide-react";

const Documentation = () => {
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
          How to Use Cods.site
        </motion.h1>

        <motion.p 
          className="text-lg text-center text-gray-700 dark:text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Learn how to make the most out of Cods.site to create, optimize, design, and share your websites effortlessly.
        </motion.p>

        {/* Steps Section */}
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg mb-6"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Icon */}
            <div className="p-3 bg-blue-100 dark:bg-blue-700 rounded-lg">
              <step.icon className="w-8 h-8 text-blue-600 dark:text-blue-300" />
            </div>
            {/* Content */}
            <div>
              <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                {step.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300">{step.description}</p>
              {step.link && (
                <Link 
                  to={step.link} 
                  className="text-blue-500 hover:text-blue-600 transition mt-2 inline-block"
                >
                  {step.linkText}
                </Link>
              )}
            </div>
          </motion.div>
        ))}

        {/* Contact Section */}
        <motion.div 
          className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg mt-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="p-3 bg-blue-100 dark:bg-blue-700 rounded-lg">
            <LifeBuoy className="w-8 h-8 text-blue-600 dark:text-blue-300" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
              Need Assistance?
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              If you encounter any issues or need guidance, feel free to contact us at:
            </p>
            <p className="mt-2">
              📩 <a href="mailto:support@cods.site" className="text-blue-500 hover:text-blue-600">support@cods.site</a>
            </p>
            <p>
              📩 <a href="mailto:ramanlohar@cods.site" className="text-blue-500 hover:text-blue-600">ramanlohar@cods.site</a>
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

// Steps Data
const steps = [
  {
    title: "Create an Account",
    description: "Visit the Create Account page and sign up for free. You’ll receive 20MB of free hosting and access to the intuitive code editor.",
    icon: UserPlus,
    link: "/create",
    linkText: "Create an Account"
  },
  {
    title: "Log In and Access the Editor",
    description: "Once your account is set up, log in to access the dashboard and start building your website with the code editor.",
    icon: LogIn,
    link: "/login",
    linkText: "Log In"
  },
  {
    title: "Build and Design Your Website",
    description: "Utilize the powerful editor and free tools provided to write and optimize your HTML, CSS, and JavaScript. Perfect for students and new developers.",
    icon: Code
  },
  {
    title: "Publish and Share",
    description: "Once you’ve finalized your website, publish it using the provided hosting and subdomain options. Share your creation with others easily.",
    icon: Upload
  },
  {
    title: "Explore Resources",
    description: "Refer to our documentation, FAQs, and support pages for additional help and tips to enhance your experience.",
    icon: BookOpen,
    link: "/documentation",
    linkText: "View Documentation"
  }
];

export default Documentation;
