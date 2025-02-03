import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { LocationProvider } from "./context/Context.jsx";

createRoot(document.getElementById("root")).render(
  <LocationProvider>
    <App />
  </LocationProvider>
);
