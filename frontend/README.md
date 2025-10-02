# SkySight — Weather App 🌤️

A clean, responsive single-page Weather App built with React + Tailwind CSS.
Fetches current weather and 5-day forecast for any city using OpenWeatherMap, with polished UI, loading/error states, localStorage last search and deploy-ready environment variable handling.

Live demo: weather-app-ashy-five-99.vercel.app
Author: Hashim Babat


Getting Started (Local Setup)

These instructions assume you used Vite for bootstrapping your React app (recommended). If you used Create React App, replace import.meta.env usage with process.env.REACT_APP_* and npm run dev with npm start.

1. Clone the repo
git clone https://github.com/Hashim-Babat/Weather-App.git
cd frontend

2. Install dependencies
npm install
 or
yarn

3. Create .env for your API key (IMPORTANT — DO NOT COMMIT)

Create a file at the project root named .env (same level as package.json).
Vite requires env vars to start with VITE_
VITE_WEATHER_API_KEY=your_openweathermap_api_key_here


Rules :
No quotes around the value.
Variable must begin with VITE_ for Vite to expose it to the client code.
Never commit .env. See .gitignore below.

4. .gitignore (ensure you have these entries)

Add the following to .gitignore (project root):
.env
node_modules/
dist/

5. Start dev server
npm run dev
or
yarn dev
