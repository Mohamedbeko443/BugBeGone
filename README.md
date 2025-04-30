# BugBeGone

BugBeGone is a bug tracking and resolution system designed to help teams manage and resolve bugs efficiently. It provides features like bug filtering, dashboards, detailed bug views, and user authentication.

---

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Scripts](#scripts)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **User Authentication**: Login functionality with form validation using `Yup` and `Formik`.
- **Bug Dashboard**: Overview of bugs categorized by status and severity.
- **Bug Filtering**: Filter bugs by severity and status.
- **Bug Details**: View detailed information about a specific bug, including comments.
- **Add Bug**: Report new bugs with a severity level.
- **Responsive Design**: Fully responsive UI built with Chakra UI.
- **404 Page**: Custom "Not Found" page for invalid routes.

---

## Technologies Used

- **Frontend**: React, React Router, Chakra UI
- **State Management**: Zustand
- **Form Handling**: Formik, Yup
- **Icons**: React Icons
- **Build Tool**: Vite
- **Styling**: CSS, Chakra UI
- **Linting**: ESLint

---

## Project Structure

The project is organized into the following main directories:

- `src/`: Contains all source code.
  - `components/`: Reusable UI components.
  - `layout/`: Layout components like `MainLayout`.
  - `pages/`: Page components for different routes.
  - `routes/`: Route definitions.
  - `schemas/`: Validation schemas for forms.
  - `store/`: State management using Zustand.
  - `utils/`: Utility functions (if any).
- `public/`: Static assets like images.
- `dist/`: Build output (ignored in `.gitignore`).

---

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v16 or higher)
- npm (v8 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/bugbegone.git
   cd bugbegone
   ```

2. Install dependencies:
    ```
    npm install
    ```

3. Running the Project
   To start the development server:
   ``` 
     npm run dev
   ```


The application will be available at
    http://localhost:5173.


