# NYT Clone

A responsive clone of The New York Times homepage, built with React and the NYT API.

Project for the React course in Start2Impact's Master's program in Full-Stack Development

**Live demo:** [nyt-clone.netlify.app](https://nyt-clone-react-js.netlify.app/)

![Screenshot of the homepage](./public/Screenshot%202026-10-27%20100027.png)

## Features

- **Sections and routing**: homepage plus 11 sections, each with its own URL.
- **Top stories**: up to 15 articles per section, each with image, section label, headline, abstract and byline, linking to the original article.
- **Responsive layout**: one column on mobile, two on medium screens, three on desktop, with a hamburger menu on smaller screens and fluid sizing for logo and headlines.
- **Caching**: articles are cached per section with the Context API, so revisiting a section doesn't trigger a new API request.

## Tech stack

- **React** + **Vite**
- **Tailwind CSS 4**
- **React Router**
- **Axios**
- **Context API**
- **Materual Symbols**

## How it works

**Routing.** `/` shows the homepage, `/section/:section` shows a single section, and any other URL shows the "Page not found" page. Before fetching, the section in the URL is checked against `sections.js`, so invalid sections never reach the API.

**Data fetching and caching.** When the section changes, `Section` first looks for its articles in the cache provided by `ArticlesProvider`. If they're missing, it fetches them with Axios, filters out items without a title, keeps the first 15 and stores them in the cache. The NYT API has strict rate limits on the free tier, so the cache keeps the number of requests low.

**Responsive design.** The layout is built with Tailwind to scale smoothly with the screen width.

## Deployment

The app is deployed on Netlify.

## Accessibility

- Semantic structure with `header`, `nav`, `main` and `footer`;
- `aria-label` and `aria-expanded` on the menu button.

## Credits

- Data provided by [The New York Times](https://developer.nytimes.com).
- This project is not affiliated with The New York Times. The New York Times name and logo are trademarks of The New York Times Company and are used here for educational purposes only.
- Made by Giulio Carboni [Sito web](https://giuliocarboni.com) · [Linkedin](https://www.linkedin.com/in/giulio-carboni-dev/)