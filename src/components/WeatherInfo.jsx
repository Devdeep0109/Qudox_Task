import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../context/Context";
import ErrorDisplay from "./ErrorDisplay";

const WeatherInfo = () => {
  const { info, setInfo, getInfo } = useContext(LocationContext);
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //setting data to local storage...............
  useEffect(() => {
    // Check if there's a city saved in localStorage
    const savedCity = localStorage.getItem("lastSearchedCity");
    if (!info && savedCity) {
      setInfo(savedCity);
    }
  }, [info, setInfo]);

  useEffect(() => {
    if (!info) {
      console.log("this info is not working");
      return;
    }
    const fetchWeatherData = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getInfo();
        if (data) {
          setWeatherData(data);
          console.log(data);
        } else {
          setError("Failed to fetch data");
        }
      } catch (err) {
        console.log(err);
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    // Fetch data immediately on mount
    fetchWeatherData();

    // Set up polling every 30 seconds
    const intervalId = setInterval(fetchWeatherData, 30000);

    // Cleanup function to clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [info]);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(null); // Clear error after 3 seconds
      }, 2000);
      return () => clearTimeout(timer); // Cleanup function
    }
  }, [error]);

  return (
    <div className="mt-5 h-screen m-2 sm:m-4  bg-gradient-to-r from-yellow-100 to-white rounded-lg shadow- border-0">
      {loading && <p>Loading weather data...</p>}
      {error && <ErrorDisplay message={error} />}

      {weatherData && weatherData.current && (
        <div className="p-4">
          <div className="m-4 text-center bg-amber-100">
            <p className=" font-bold text-md sm:text-md md:text-lg lg:text-xl">
              {weatherData.location.name}
            </p>
            <p className="text-sm sm:text-sm md:text-md lg:text-lg">
              {weatherData.location.region}, {weatherData.location.country}
            </p>
          </div>

          <div className="flex flex-row justify-around">
            <div className="ml-8">
              <img
                className="w-25 h-25"
                src={weatherData.current.condition.icon}
                alt="weather icon"
              />
              <p className="ml-2 text-2xl font-bold">
                {weatherData.current.condition.text}
              </p>
            </div>

            <div>
              <p className="p-1">Humidity: {weatherData.current.humidity} %</p>
              <p className="p-1">
                Wind Speed: {weatherData.current.wind_kph} km/h
              </p>
              <p className="p-1 font-bold text-4xl">
                {weatherData.current.feelslike_c}°c
              </p>
              <p className="p-1">In: {weatherData.current.feelslike_f}°F</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherInfo;
