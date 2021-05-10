# TheShoppies
[Check out the Live Site!](https://the-shoppies-project.netlify.app/)

Movie Awards Nominations site using OMBd API

**Updates/Future Ideas:**
- Since data is saved on Airtable, create a veiw of all movies already nominated by others and a list or precentage of votes going to that movie
- add a share button to share your nominations
- A typeahead feature for the search bar
- Adding/ saving more or all the movie info when clicked to nominate so more can be displayed in nominations and more info can be saved to the database( also makes sure movies with same titles arent grouped together incorrectly)
- Add function that displays "no mvoies found, try a different title" or similar when no movies are returned from the search.
- Change the airtable to either require the name or make the name Anonymous if one is not provided.
  - Could also add an email field and check whether users already submitted nominations so they cannot keep submitting.


**Issues to Resolve:**
- the function allowing localStorgae to repopulate the Nominations(i.e. save someones list) uses a comma to seperate movie titles. This means any movie titles using a comma will seperate into the list incorrectly. Will need to find a new way to recreate the array.
