import { createContext, useState } from "react";

const LocationContext = createContext();

export const LocationProvider = (props) => {
  const [info, setInfo] = useState("New Delhi");

  const getInfo = async () => {
    const location = info;

    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=2cb717fdc0844586817173414241604&q=${location}&aqi=no`,
        { method: "GET" }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      return await response.json();
    } catch (error) {
      console.error("API Error:", error);
      return null;
    }
  };

  return (
    <LocationContext.Provider value={{ info, setInfo, getInfo }}>
      {props.children}
    </LocationContext.Provider>
  );
};

export { LocationContext };
