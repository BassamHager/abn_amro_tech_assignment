# abn_amro_tech_assignment

Simple React.js app, using tvmaze API, the state managed using React Context API, this app lets the user views a few lists of TV shows based on different genres. Each list has a few popular TV shows based on their rating. Clicking a TV show card shall display a new screen with the details of the clicked show.

## Requirements & Notes:

1. Home page: user views a few lists(preferable horizontal list) of TV shows based on different genres (drama, comedy, sports, etc.), each list has a few popular TV shows based on their rating.
2. User clicks on a TV show then the details of that TV show should be displayed on another screen.
3. User should be able to search for a TV show to get the details.
4. Responsive & mobile friendly
5. Minimum in scaffolding n templates
6. Readme file (describe the architecture, why React, how to run the app)
7. Simple & eye catching style
8. Unit tests (jest)
9. Optionally, add more features than the requested

## Brainstorming & basic todos:

- Bookmark the related websites in a newly created folder in the browser
- Create & organize the app local folders & download the attachments
- Create a Github repository with a README.md file & a proper license
- Engineer the app in a high level in
- Design the responsive app by creating figma mockups
- Explain why Figma, the screen sizes approach & the calculations
- Create React app & install the min amount of libraries
- Explain why is React
- Assure accessibility
- Use light animation on reload the home page
- Write unit tests (jest)
- Create a Cypress project

## Hight level architecture:

- Scaffold a React app using npx create-react-app tool
- Cleanup files & update the title in the html header
- Create: a main show-app container, a show-list component, a show-card component, and a show-details container.
- Either the (main | details) container shall be displayed (as I have the data already => no need to use the expensive react router, a boolean value will govern the display behavior properly)
- Setup the needed state management using React Context API with the brilliant react-hook: useReducer
- Retrieve shows' data & update the lists states of the top rated shows as per gender and render them using the show list component
- Retrieve more shows as a user scrolls down (Infinite Scrolling)
- Display the show details in a new screen when show-card is clicked
- Create a search input to fetch, filter in & display the shows have the queried input in their names
- Create a Navbar with the main title and home, about & settings icons
