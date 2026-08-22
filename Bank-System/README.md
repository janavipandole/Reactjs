# Bank System

A responsive banking website built with React and Vite. The project includes a landing page, reusable UI components, login and registration screens, feature sections, and a structured footer.

## Features

- Responsive banking landing page
- Reusable React components
- Login page
- Registration page
- Feature cards
- Navigation bar
- Multi-section footer
- CSS-based styling
- ESLint configuration
- Fast Vite development environment

## Technologies

- React
- Vite
- JavaScript
- CSS
- ESLint

## Project Structure

```text
Bank-System/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── LandingPage/
│   │   │   ├── CopyRight.jsx
│   │   │   ├── FeatureCard.jsx
│   │   │   ├── FeatureHeading.jsx
│   │   │   ├── Features.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── FooterContainer.jsx
│   │   │   ├── FooterPart1.jsx
│   │   │   ├── FooterPart2.jsx
│   │   │   ├── FooterPart3.jsx
│   │   │   ├── FooterPart4.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── HomeCenter.jsx
│   │   │   ├── HomeLeft.jsx
│   │   │   ├── HomeRight.jsx
│   │   │   └── Navbar.jsx
│   │   ├── LoginPage/
│   │   │   └── Login.jsx
│   │   └── RegisterPage/
│   │       └── Register.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## Requirements

- Node.js 18 or later
- npm

Verify your installation:

```bash
node --version
npm --version
```

## Installation

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd Bank-System
npm install
```

## Start the Development Server

```bash
npm run dev
```

Open the URL shown in the terminal. The default Vite URL is:

```text
http://localhost:5173
```

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Creates a production build |
| `npm run preview` | Previews the production build |
| `npm run lint` | Checks the project for ESLint issues |

## Production Build

Create the production build:

```bash
npm run build
```

Preview the build locally:

```bash
npm run preview
```

The production files are generated in the `dist/` directory.

## Customization

- Update the main application in `src/App.jsx`.
- Update global styles in `src/index.css`.
- Update application styles in `src/App.css`.
- Add landing-page sections in `src/components/LandingPage/`.
- Modify the login page in `src/components/LoginPage/Login.jsx`.
- Modify the registration page in `src/components/RegisterPage/Register.jsx`.
- Store project assets in `src/assets/`.

## Future Improvements

- Add backend authentication
- Connect forms to an API
- Add account dashboards
- Add transaction management
- Add form validation
- Add client-side routing
- Add automated tests
- Add database integration
- Improve accessibility

## License

This project is intended for educational and development purposes.