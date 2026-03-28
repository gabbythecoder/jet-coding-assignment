# JET Coding Assignment

Take home coding assignment from JET. 

## How the Assignment Went

For this assignment, I chose to use Next.js as the framework, as it's something I'm already comfortable with and JavaScript as the main coding language. My primary goal was to create a clean, responsive interface to display restaurant data based on a user's postcode input. Below are some key aspects of my process, along with challenges I faced and how I overcame them:

1. Data Display:
  - I successfully displayed the four required restaurant data points: Name, Cuisines, Rating (as a number) and Address. The data is fetched dynamically via an API based on the user's postcode input. 
  - The design is fully responsive, adjusting seamlessly between mobile and desktop views. I used Flexbox, Grid and Tailwind CSS to manage layout and ensure the interface adapts fluidly across different screen sizes. 

2. Challenges Faced:
  - **Restaurant List Layout**: For displaying each restaurant in a card layout, I initially ran into issues when using Grid. I had to adjust the card dimensions for different breakpoints and ensure that longer addresses didn't get cut off. To resolve this, I fine-tuned the font sizes while maintaining readability across screen sizes.
  - **Handling User Input**: A major challenge was managing user input for postcodes. To ensure a smooth experience when a user enters an invalid postcode or one with no results, I added error messages that notify users accordingly. This provides better feedback and enhances the overall user experience.
  - **Debugging API Responses**: Given my unfamiliarity with how the API was structured, I relied on `console.log` during the development process to validate the API responses and ensure that I was correctly displaying the necessary data points. This manual testing helped me ensure that the app met the assignment's requirements. 
  - **Next.js Integration**: Next.js, being server-side rendered by default, required careful management of client-side logic. Specifically, I had to ensure the correct use of the `useState` hook by adding the `use client;` directive at the top of the component. Additionally, I created an API folder with a `route.js` file to make API calls. Once I got this working, I was able to dynamically fetch and display the restaurant data based on user inputs. 

3. Assumptions Made:
  - The project instructions didn't specify how to handle empty results, so I assumed that displaying an error message when no results were found would be the most user-friendly solution. 
  - The UI design was intentionally open-ended, so I opted for a clean, minimalistic approach that prioritises clarity and responsiveness, focusing on a straightforward presentation of the data. 

### Improvements

- **Address Formatting**: Some addresses in the API already include commas, which results in duplicate commas when displayed on the page. Cleaning up this formatting would enhance readability and reduce visual clutter.
- **Loading State**: To further improve the user experience, adding a loading spinner or message would provide feedback to users while data is being fetched, making it clear that the app is processing their request. 
- **Accessibility Enhancements**: Improving accessibility by adding relevant ARIA attributes and ensuring proper focus management would benefit users who rely on keyboard navigation or screen readers, creating a more inclusive experience. 

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
