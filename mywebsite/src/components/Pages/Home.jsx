import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="w-full bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-16">
      <div className="container mx-auto px-6 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Section - Text Content */}
          <motion.div
            className="flex flex-col items-center md:items-start text-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="w-full text-4xl font-bold md:text-center">
              Build Your Website for{" "}
              <span className="text-blue-500">Free!</span>
            </h2>
            <p className="text-lg mt-4 md:text-center">
              Get started with 20MB of free hosting, a powerful code editor, and
              free subdomains. No hidden charges!
            </p>

            {/* CODS Meaning */}
            <div className="mt-6 md:text-center">
              <h4 className="text-xl font-bold uppercase text-blue-600 dark:text-blue-400">
                C.O.D.S
              </h4>
              <p className="italic text-gray-500 dark:text-gray-400">
                Create, Optimize, Design, Share
              </p>
              <p className="mt-2">
                Empowering you to create and share your websites effortlessly
                with professional designs and tools.
              </p>
            </div>

            {/* Buttons */}
            <div className="w-full mt-6 flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:space-x-4">
              <Link
                to="/create"
                className="px-6 py-3 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition"
              >
                Create Account
              </Link>
              <Link
                to="/login"
                className="px-6 py-3 border border-blue-500 text-blue-500 rounded-lg font-medium hover:bg-blue-500 hover:text-white transition"
              >
                Login
              </Link>
            </div>
          </motion.div>

          {/* Right Section - Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/images/illustration2.png"
              alt="Cods.site Illustration"
              className="w-full max-w-sm md:max-w-xl rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>

      {/* Learn More Section */}
      <motion.section
        className="mt-20 bg-blue-600 dark:bg-gray-700 text-white text-center py-12 px-6 rounded-lg shadow-lg mx-4 md:mx-auto max-w-4xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold">Why Choose Cods.site?</h2>
        <p className="text-lg my-4">
          Cods.site is your ultimate platform to create, optimize, design, and
          share your websites effortlessly. With beginner-friendly tools and
          free hosting, we make coding accessible and fun for everyone.
        </p>
        <Link
          to="/about"
          className="px-6 py-3 bg-white text-blue-600 dark:text-black font-medium rounded-lg hover:bg-gray-100 transition"
        >
          Learn More
        </Link>
      </motion.section>
    </section>
  );
};

export default Home;
