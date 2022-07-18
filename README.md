# FlixStars - Spring's Frontend Tecnhical Task

This repository for a React & TypeScript orientated technical task, designed to give candidates an opporunity to showcase their skills.

## Scenario

The highly successful (and fictional) FlixStars movie review website has called
upon you to help build its new search page & results pages.

### Design

The FlixStars design team has provided you with the following mock-up of what they would like to achieve:

![FlixStars - Design Brief](https://raw.githubusercontent.com/recyclabox/flixstars/main/preview.png "FlixStars - Design Brief")

### Data

FlixStar's data is retrieved from the **Open Movie Database (OMDb) API**. You will
need to go to `http:// www.omdbapi.com/apikey.aspx`, request an API key, and read
the documentation.

### Requirements

Use your expertise to create a semantic, 'type-safe', 'mobile-first', application that matches the designs and includes the following features:

1. Allows a user to search for a 'flix' by title.
2. A search input that accepts a string, performs a fetch request to the OMDb search endpoint
3. A list of search results, including each result’s:
   • Poster Image
   • Title
   • Year of release
4. When the search result item is clicked, additional details about the user's selection is displayed.
5. Ensure both loading and error states are considered.

Your app should take extensibility, maintainability, and state management into consideration.

> **Note:** As this is a small application, a full state management system is _not_ required. Instead focus on component composition.

### Stetch

Want to push the boat out? You’re free to add anything you think will improve the codebase or user experience. Here are some ideas:

1. Abstract your data fetching logic to custom React Hook(s).
2. Utilise any advanced react patterns (such as Compound Components).
3. Focus on performance by utilising React's Suspense & memoisation techniques.
4. Perform searches asynchronously after a debounce delay.
5. Write unit or integration tests and bake them into your workflow
6. Add micro interactions and animations to delight your users
7. Create an advanced search that allows users to refine their results by; "movie", "series", "episode".

## Stack

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

We have used the following technologies:

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

We'd encourage you to install any helpful tools (such as [Prettier](https://prettier.io/) & [ESLint](https://eslint.org/), etc) that will help you work efficently.

> **Note:** Whilst you can add your own dependancies to the task project, the purpose of this tasks is to highlight your abilities so we'd recommend for the most part you leverage the pre-installed dependencies and your knowledge of the relevant languages

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
