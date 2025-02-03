import { useContext, useRef, useState } from "react";
import { LocationContext } from "../context/Context";
import ErrorDisplay from "./ErrorDisplay";

const Search = () => {
  const inputRef = useRef(null);
  const { setInfo } = useContext(LocationContext);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();

    const latestPlace = inputRef.current.value.trim();
    console.log("place:", latestPlace);

    if (latestPlace.trim() === "") {
      setShowPopup(true); // Show popup
      setTimeout(() => setShowPopup(false), 3000); // Hide after 3 seconds
      return;
    }
    setInfo(latestPlace);
    localStorage.setItem("lastSearchedCity", latestPlace);

    // Clear input field after search (optional)
    inputRef.current.value = "";
  };
  // useEffect(() => {
  //   console.log("Updated info:", info);
  // }, [info]);

  return (
    <div className="mt-10 flex justify-center items-center flex-col sm:flex-row">
      {showPopup && <ErrorDisplay />}
      <form
        onSubmit={handleChange}
        className="flex sm:flex-row flex-col items-center sm:gap-4"
      >
        <input
          ref={inputRef}
          className="m-2 p-2 pl-12 pr-12 mr-4 border-2 rounded-lg hover:cursor-pointer"
          type="text"
          placeholder="Enter location"
        />
        <button
          className="p-2 pl-6 pr-6 rounded-lg bg-sky-600 hover:bg-sky-400 hover:cursor-pointer"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
