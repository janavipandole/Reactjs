# Chapter 1: React Basics

This project is a simple job-listing UI built while learning the basic concepts of React. Each job opening is displayed as a reusable card.

## Concepts Practiced

### 1. React components

The app is split into components so each part of the interface has a clear responsibility:

- `App.jsx` stores the job data and renders the list.
- `Card.jsx` defines the reusable job-card layout.
- `main.jsx` is the entry point that renders the React app.

### 2. Props

`App` passes job information to `Card` through props:

```jsx
<Card
	companyName={info.companyName}
	post={info.post}
	pay={info.pay}
	location={info.location}
/>
```

The `Card` component receives those values and uses them to display dynamic content.

### 3. Arrays and `.map()`

The job openings are stored in an array. The array is converted into UI elements with `.map()`:

```jsx
{jobOpenings.map((info, index) => (
	<Card key={index} {...info} />
))}
```

The `key` helps React identify each item when rendering a list.

### 4. JSX

JSX lets the components describe the page with HTML-like syntax inside JavaScript. JavaScript values are inserted with curly braces, for example `{companyName}` or `{pay}`.

### 5. Reusable icons

The Save button uses the `Bookmark` icon from `lucide-react` instead of drawing an icon manually.

## Run the Project

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Other useful commands:

```bash
npm run lint   # Check the source code
npm run build  # Create a production build
```

## Project Structure

```text
src/
├── App.jsx                 # Job data and list rendering
├── main.jsx                # React entry point
├── index.css               # Global styles
└── components/
		└── Card.jsx            # Reusable job card
```

## Next Practice Ideas

- Move the job data into its own file.
- Replace the array index with a unique job id for the `key`.
- Add state so the Save button can mark a job as saved.
- Add a search or filter feature.
