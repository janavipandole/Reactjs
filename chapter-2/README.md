# Chapter 2: React Components and Tailwind CSS

This project is a responsive landing page for a digital banking platform. It uses a hero section with reusable customer cards and a second page section.

## Concepts Practiced

### 1. Component composition

The page is divided into small components that are combined to build the interface:

- `App.jsx` is the top-level component and owns the customer data.
- `Hero.jsx` combines the navbar and hero content.
- `Content.jsx` combines the left and right areas of the hero.
- `RightContent.jsx` renders the customer-card list.
- `RightCard.jsx` defines the reusable image card.
- `RightCardContent.jsx` displays the text, buttons, number, and color overlay.
- `Secondpage.jsx` represents the next page section.

Breaking a page into focused components makes each part easier to read, reuse, and update.

### 2. Passing data with props

`App` passes the customer array to `Hero`:

```jsx
<Hero user={userData} />
```

That data is forwarded through the component tree until `RightCard` receives the values it needs:

```jsx
<RightCard
	img={elem.img}
	info={elem.info}
	btn={elem.btn}
	col={elem.col}
/>
```

Props allow a single component to display different content without duplicating its markup.

### 3. Rendering a list with `.map()`

The customer cards are created from the `userData` array:

```jsx
{props.user.map((elem, i) => (
	<RightCard key={i} id={i} {...elem} />
))}
```

The `key` gives React a way to identify each item in the list. In a larger application, a stable customer id would be better than the array index.

### 4. Dynamic styles

The card button color comes from the data object and is applied with an inline style:

```jsx
<button style={{ backgroundColor: col }}>{btn}</button>
```

This shows how JavaScript values can control presentation while the component remains reusable.

### 5. Tailwind CSS utility classes

Tailwind CSS is used directly in JSX through utility classes such as:

- `flex`, `justify-between`, and `items-center` for layout
- `w-2/3` and `h-screen` for sizing
- `overflow-x-auto` for horizontal scrolling
- `object-cover` for image fitting
- `rounded-full` and `rounded-4xl` for shapes

The project also hides the horizontal scrollbar in `src/index.css`.

### 6. Reusable icons

`lucide-react` supplies icons such as `ArrowRight` and `CornerDownRight`. These icons are imported as React components and can be sized or styled through props and classes.

## Run the Project

Install dependencies:

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
├── App.jsx                         # Page data and top-level composition
├── main.jsx                        # React entry point
├── index.css                       # Tailwind import and scrollbar style
└── componenets/
		├── heroPage/
		│   ├── Hero.jsx                # Hero section shell
		│   ├── Navbar.jsx              # Top navigation
		│   ├── Content.jsx             # Hero layout
		│   ├── LeftContent.jsx         # Left side of the hero
		│   ├── RightContent.jsx        # Customer-card list
		│   ├── RightCard.jsx            # Reusable customer card
		│   └── RightCardContent.jsx     # Card details and actions
		└── secondPage/
				└── Secondpage.jsx          # Second page section
```

## Next Practice Ideas

- Replace the array index with a unique id for each customer card.
- Add state to track the selected or active card.
- Make the card buttons perform an action.
- Correct the component-folder spelling from `componenets` to `components` when practicing imports.
- Add responsive layout changes for smaller screens.
