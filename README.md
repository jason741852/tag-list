# Tag List

## Running the app

to run the app, run `npm i` and then run `npm run start`
to run tests, run `npm run test`

## Eexpected behaviours

- User should be able to add maxium of 5 tags to each item, TextField will not be shown if maximum tags is reached
- User can search for multiple tags by either separating tag names with ',' or '+'. Using ',' would apply an OR filter and '+' would apply an AND filter on the result.
- Since ',' and '+' are used as delimiters, they are illegal characters when adding a tag. TextField will show red border to indicate an error.

## Features

- User can populate and reset tags using buttons at the top left.
- Common UI components (TextField, Button, SearchField and Tag) are under src/client/shared/components.
- Tag data are persisted between sessions using localStorage
- State logic is implemented using React useContext and useReducer.
