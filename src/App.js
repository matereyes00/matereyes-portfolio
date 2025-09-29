import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Layout from "./Components/layout/Layout"; // Make sure this path is correct
import Home from "./Pages/HomePage";
import About from "./Pages/AboutPage";
import Projects from "./Pages/ProjectsPage";
import MiniProjects from "./Pages/MiniProjectsPage";
import SteakDashboard from "./Features/Projects/MiniProjects/SteakTimer/SteakTimerProject.jsx";
import Maze from "./Features/Projects/MiniProjects/Maze.jsx";
import ToggleDarkMode from "./Features/Projects/MiniProjects/ToggleDarkMode.jsx";
import ReactPractice from "./Features/Projects/MiniProjects/AlgorithmVisualizer/AlgorithmVisualizer.jsx";

import "./App.css";

// Define all your routes using the modern data API
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // The Layout component wraps all child routes
    children: [
      { index: true, element: <Home /> }, // Use index: true for the home page
      { path: "about", element: <About /> },
      { path: "academic-projects", element: <Projects /> },
      { path: "mini-projects", element: <MiniProjects /> },

      // Your mini-project routes are nested here.
      // The Layout will hide the Header and Footer for these routes.
      { path: "mini-projects/steak-dashboard", element: <SteakDashboard /> },
      { path: "mini-projects/maze", element: <Maze /> },
      { path: "mini-projects/toggle-dark-mode", element: <ToggleDarkMode /> },
      { path: "mini-projects/algorithm-visualizer", element: <ReactPractice /> },
    ],
  },
], {
});

function App() {
    // The App component now only needs to provide the router
    return <RouterProvider router={router} />;
}

export default App;