# savoodle's space

A personal website built with React + Vite: mossy, misty, almost monotone
green with a hint of bark brown.

## Run it

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build into dist/
```

## How it's organized

```
index.html            the page (fonts + tab icon live here)
public/favicon.svg    the ✿ tab icon
src/
  entries/home.jsx    renders the Home page into #root
  pages/Home.jsx      the home page
  components/         reusable pieces (Navbar, Footer, Ticker, ScrapCard, PostCard)
  data/               arrays of objects to .map() over
  index.css           all styles + the color palette variables
```

## Common edits

- **Change colors or fonts:** edit the variables at the top of `src/index.css`
