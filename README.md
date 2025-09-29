# Martina Reyes - Personal Portfolio
This repository contains the source code for my personal portfolio, a dynamic single-page application built to showcase my projects and skills.

# Project Architecture
This portfolio is built using a modern, serverless architecture that separates the frontend interface from the backend data, ensuring security and scalability.

- Frontend: A responsive user interface built with React and styled with Tailwind CSS. Routing is handled by React Router.
- Database: Project data is stored in Google Firestore, a NoSQL cloud database. This allows for project information to be updated dynamically without needing to redeploy the entire application.
- Hosting: The static frontend is hosted on Netlify, which provides continuous deployment. Every push to the main branch automatically triggers a new build and deploy of the live site.

**The data flow is as follows:**
1. A user visits the Netlify-hosted site.
2. The React application uses a custom hook to send a secure request to the Firebase backend.
3. Firestore returns the project data, which is then rendered on the page.

# Key Features
**Dynamic Project Loading:** All project and mini-project data is fetched live from the Firestore database, making content updates easy.
**Reusable Components:** The UI is built with a component-based structure, promoting clean and maintainable code.
**Custom Data Management:** Project data is managed locally in JSON files and synced to the live database using a custom Node.js script.

# Managing Project Data
To update the projects displayed on the portfolio, I do not edit the database directly. Instead, I follow this workflow:
1. Local Data: All project metadata is stored in two files: scripts/projects.json and scripts/miniProjects.json.
2. Sync Script: A custom Node.js script located at scripts/uploadData.js is used to sync this local data with Firestore.
3. Execution: Running node scripts/uploadData.js in the terminal first deletes all existing documents in the projects and miniProjects collections to prevent duplicates, then uploads the fresh data from the JSON files.

# About This Repository
This repository is a personal showcase of my work and is not intended to be a generic template. The code is tailored to my specific data structures and design choices. You are welcome to browse the code for inspiration, but I kindly request that you do not clone or fork this repository for direct reuse. Thank you!