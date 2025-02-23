import PropTypes from "prop-types";

export default function Card({ Name }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 max-w-sm">
      <img
        className="w-full h-48 object-cover rounded-xl"
        src="https://via.placeholder.com/300"
        alt="Card Image"
      />
      <h2 className="text-xl font-semibold mt-4 text-gray-800">{Name}</h2>
      <p className="text-gray-600 mt-2">
        This is a simple card component using Tailwind CSS. You can customize it as needed.
      </p>
      <button className="mt-4 w-full bg-blue-500 text-black py-2 px-4 rounded-xl hover:bg-blue-600 transition-all duration-300">
        Learn More
      </button>
    </div>
  );
}

// ✅ Define PropTypes
Card.propTypes = {
  Name: PropTypes.string, // Ensures Name is a string
};

// ✅ Default Props
Card.defaultProps = {
  Name: "Default Name",
};
