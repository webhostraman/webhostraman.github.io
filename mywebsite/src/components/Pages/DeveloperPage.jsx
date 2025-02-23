const DeveloperPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-2xl overflow-hidden transform hover:scale-105 transition duration-300">
        {/* Raman's Profile */}
        <div className="md:flex items-center p-6">
          <div className="flex-shrink-0 mx-auto md:mx-0">
            <img
              className="h-40 w-40 object-cover rounded-full border-4 border-indigo-500 shadow-md"
              src="https://avatars.githubusercontent.com/u/143930543?v=4"
              alt="Raman Lohar"
            />
          </div>
          <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start">
              <h1 className="text-2xl font-bold text-gray-800">Raman Lohar</h1>
            </div>
            <p className="text-gray-600 mt-2">
              I am Raman Lohar, a B.Tech CSE student passionate about web development and open-source contributions.
              I enjoy building user-friendly applications and continuously learning new technologies.
            </p>
            <a
              href="https://github.com/ramanlohar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 px-4 py-2 text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
            >
              Visit GitHub
            </a>
          </div>
        </div>

        {/* ChatGPT's Profile */}
        <div className="md:flex items-center bg-gray-100 p-6 rounded-b-2xl">
          <div className="flex-shrink-0 mx-auto md:mx-0">
            <img
              className="h-40 w-40 object-cover rounded-full border-4 border-indigo-500 shadow-md"
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg"
              alt="ChatGPT"
            />
          </div>
          <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start">
              <h1 className="text-2xl font-bold text-gray-800">ChatGPT</h1>
            </div>
            <p className="text-gray-600 mt-2">
              ChatGPT is an AI assistant developed by OpenAI. It helps developers with code suggestions,
              debugging, and learning new technologies efficiently.
            </p>
            <a
              href="https://openai.com/chatgpt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 px-4 py-2 text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperPage;
