import PropTypes from "prop-types";

export default function Button({ text = "Click Me", onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold text-lg rounded-xl shadow-md 
                 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg 
                 focus:ring-4 focus:ring-blue-300 active:scale-95 active:shadow-sm"
    >
      {text}
    </button>
  );
}

// ✅ Correct PropTypes definition
Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};