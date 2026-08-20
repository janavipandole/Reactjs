# Props Drilling Project

A React application demonstrating **props drilling** by passing data and event handlers from a parent component through child components.

## Technologies

- React
- Vite
- JavaScript
- CSS
- ESLint

## Project Structure

```text
src/
├── App.jsx
├── App.css
├── index.css
├── main.jsx
├── assets/
└── components/
    └── Card.jsx
```

## Getting Started

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local URL displayed in the terminal.

## Available Scripts

```bash
npm run dev      # Start the development server
npm run build    # Build the application for production
npm run preview  # Preview the production build
npm run lint     # Check the code with ESLint
```

## Key Concepts

This project demonstrates:

- Passing data using props
- Passing props through multiple components
- Reusing components
- Creating a separate `Card` component
- Managing parent-to-child data flow

## Production Build

```bash
npm run build
```

The optimized files will be generated in the `dist` folder.