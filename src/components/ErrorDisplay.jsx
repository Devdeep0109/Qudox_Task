import PropTypes from "prop-types"; // Import PropTypes

const ErrorDisplay = ({ message }) => {
  if (!message) return null; // Prevent rendering if there's no message

  return (
    <div className="p-10 fixed top-10 left-1/2 transform -translate-x-1/2 bg-red-500 text-white p-4 rounded-lg shadow-lg animate-fade">
      {message}
    </div>
  );
};

// ✅ Add PropTypes to validate the "message" prop
ErrorDisplay.propTypes = {
  message: PropTypes.string.isRequired, // "message" must be a string and required
};

export default ErrorDisplay;
