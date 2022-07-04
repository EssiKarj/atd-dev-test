
# Simple product display and search

This Create React App is a simple product display with search feature that shows products
according to user's input.


## Requirements

- Simple product page
- Search field to search products by title
- Uses API for product data
- (optional) Styling the page
## Process

I started the project by planning and breaking the task down while thinking the ways of making the code the most performant and easily scalable if needed.

- **Simple product page:** multiple product cards or displays

As I planned to do styling last and focus on the functional side first, I still knew the product display would be the first visual users would see and that they needed to be consistent. 
This allowed me to utilise React components and build them dynamically to create and display each product within DRY principles and keep them easy to maintain once it came to styling as well.

- **Search field by title:** takes user's input and stores it in a state, filters products using user's input, a function that updates shown products, (something to notify if there's no results)
- **External API for product data:** fetches all the data in one request, a state to store the data, useEffect to execute a function that handles API request at first page render

The API had data of 10 items and to make the user experience the most smooth and the code the most performant, I decided to only make one request to the API on the first render of the page.
This way I could store all the data to a state which I can use like a library instead of needing to make multiple request each time user uses the search function. \
Similarly I stored the user's input to a state which then allowed me to have a reference point to filter the product data for finding the search results.

- **Styling the page**: travel themed, up to 10 product cards/displays, search field, multiple images => simple layout

The project has a travel theme and displays different travels as the products so the images are very important in displaying each travel. Which is why I wanted to keep the main focus on the imagery and follow a simple layout to avoid
the page looking too busy or distracting.\
Another main part of my styling was to display the products in a grid format to be able to see multiple travels at once and use the images as the main part of each display.

## Deployment

To deploy this project, in the terminal run:

```bash
  yarn 
```
This installs dependencies and packages, and then to finally run the project on your browser run:
```bash
  yarn start
```

The project is now running at [http://localhost:3000/](http://localhost:3000/)
