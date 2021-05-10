# TheShoppies
Movie Awards Nominations site using OMBd API

**Updates/Future Ideas:**
- Since data is saved on Airtable, create a veiw of all movies already nominated by others and a list or precentage of votes going to that movie
- add a share button to share your nominations
- a typeahead feature for the search bar
- Adding/ saving more or all the movie info when clicked to nominate so more can be displayed in nominations and more info can be saved to the database( also makes sure movies with same titles arent grouped together incorrectly)


**Issues to Resolve:**
- the function allowing localStorgae to repopulate the Nominations(i.e. save someones list) uses a comma to seperate movie titles. This means any movie titles using a comma will seperate into the list incorrectly. Will need to find a new way to recreate the array.
