Weather Application
It displays information like temperature, humidity, wind speed, and weather conditions.

Features
Search for weather data by city.
Displays the city's weather, including temperature, humidity, wind speed, and condition.
Responsive design for mobile and desktop views.
Custom error handling for invalid input.
Background color changes based on weather conditions.
Weather data is updated every 30 seconds (API polling).

Technologies Used
React for building the user interface.
Tailwind CSS for styling and responsive design.
Weather API to fetch weather data.
LocalStorage to save the last searched city and load it when the user revisits the app.

Prerequisites
Node.js (v14 or higher)
npm (v6 or higher)
Installation
Clone the repository:

bash
Copy
Edit
git clone https://github.com/your-username/weather-app.git
cd weather-app
Install dependencies:

bash
Copy
Edit
npm install
Run the development server:

bash
Copy
Edit
npm run dev

Usage
Upon loading the app, you'll see a search bar where you can type a city name.
After entering the city and clicking the Search button, the weather data for that city will be displayed.
The background color will change based on the weather condition (e.g., sunny, cloudy, rainy).
The app polls the API every 30 seconds to update the weather data.
If you enter an invalid or empty location, a custom error message will appear at the top of the screen.
Responsive Design
The app is designed to be fully responsive:


Customization
You can customize the following aspects:
Weather API: Currently, the app uses a weather API that can be replaced with any other weather data provider.
Tailwind Colors: Tailwind's built-in colors and gradients can be customized in the tailwind.config.js file.
Polling Interval: The data is fetched every 30 seconds. You can adjust the interval by changing the setInterval function in WeatherInfo.js.
