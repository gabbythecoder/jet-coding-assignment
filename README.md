# JET Coding Assignment

## Features

- Search for restaurants by typing a postcode into the Search Bar
- Displays only the first 10 restaurants returned by the API
- Shows all four restaurant data points:
  - Name
  - Cuisines
  - Rating (as a number)
  - Address
- Displays an error message when no restaurants are found for the entered postcode
- Clears previous restaurant results when new postcode search is submitted
- Fully responsive design for mobile and desktop

## How to Build, Compile and Run

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

### Getting Started

- Clone the repository

```bash
git clone git@github.com:gabbythecoder/jet-coding-assignment.git
cd <your-repo-folder>
```

- Install dependencies

```bash
npm install
# or
yarn install
```

- Set up environment variables
  - Create a `.env` file in the root of the project
  - Add your API URL from the brief:

```bash
# .env
JET_API_URL="https://api.example.com" # replace with the URL from the brief
```

- Run the development server

```bash
npm run dev
# or
yarn dev
```

- Open your browser at [local host](http://localhost:3000) to view the app
- Optional - Test the app
  - Use the search bar on the homepage to enter a postcode
  - The app will fetch and display up to the first 10 restaurants

## Project Stack

- Next.js 16
- JavaScript
- Tailwind CSS
