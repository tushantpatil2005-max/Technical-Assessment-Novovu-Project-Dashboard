
Novovu Frontend Project Dashboard

This repository contains the frontend implementation for the Novovu Project Management Interface. This project was built as part of a technical assessment to demonstrate high-quality UI/UX development, state management in Vanilla JavaScript, and seamless coordination with backend data structures.

 Overview

The Novovu Dashboard is a responsive, single-page application (SPA) designed for internal developers to track project progress. It focuses on clean code, performance, and accessibility.

Key Features

Dynamic Data Rendering: Synchronizes with a mock backend (JSON) to display real-time project updates.

Advanced Filtering: Users can filter projects by status (In Progress, Completed, Delayed) or search by project title.

Responsive Layout: Optimized for desktop, tablet, and mobile using CSS Grid and Flexbox.

Interactive Modals: Detailed project views without page reloads.

Modular Design: Built with a "Backend-First" mindset, making it easy to swap the local data.json for a live REST API.

 Tech Stack

HTML5: Semantic markup for SEO and accessibility (A11y).

CSS3: Modern styling using Custom Properties (Variables) and a Mobile-First approach.

JavaScript (ES6+): Vanilla JS used for DOM manipulation, Fetch API for data handling, and asynchronous logic.

 Installation & Setup

Clone the repository:

code
Bash
download
content_copy
expand_less
git clone https://github.com/tushantpatil2005-max/Technical-Assessment-Novovu-Project-Dashboard

Navigate to the directory:

code
Bash
download
content_copy
expand_less
cd novovu-frontend-dashboard

Run the project:
Simply open index.html in your browser.
Note: For the Fetch API functionality to work correctly with local files, it is recommended to use a local server (like "Live Server" in VS Code).

 Backend Coordination

This project is designed to bridge the gap between frontend and backend teams:

API Simulation: The app uses an async/await fetch pattern. To connect to the Novovu production backend, simply update the fetch() URL in script.js.

Data Validation: The frontend includes error handling to manage "API" failures or empty data states gracefully.

Naming Conventions: Variable names and data keys match standard RESTful naming conventions to ensure consistency with backend schemas.

 Future Improvements

If given more time, the following features would be implemented:

Unit Testing: Implement Jest for testing the filtering logic.

Sass Integration: Transition CSS to SCSS for better nesting and modularity.

CI/CD: Set up GitHub Actions to auto-deploy the dashboard to a staging environment.

 Author

[Tushant Anil Patil]
Frontend Developer Candidate for Novovu

Why this README works:

Professionalism: It uses industry-standard terminology.

Context: It explains how you would work with the backend team, which was a specific requirement of your prompt.

Vision: The "Future Improvements" section shows you have a growth mindset and understand the full development lifecycle.