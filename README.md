### Clicky Game

This app is a memory game that allows you to click a character (from One Piece).  The goal is to try and click a different character every time.  If you click on every character once you win, if you click on the same character more than once before clicking on all of them, you lose, and the game starts over.  It keeps track of your score, and your top score.

### How it works

I added each of the characters in a JSON file with their name, and picture that pulls from a public image file that I have set.  I have the characters set to state along with an clickedChar as an empty array, topscore set at zero, and "correct" set as click on an image to begin for the initial states.  


I have all the characters separated with the map method, and set the mapped characters to show on the page. Once a character is clicked, it runs the handleClicked function with the character's name passed into the function.

The handleClicked function first runs the handle shuffle function, which sets the state of the characters as the shuffle array with the array of characters passed in.  

The shuffleArray function passes in the array, and has initial variables of a, b, and c.  I created a for loop with var a that starts from the end of the array, and loops backwards.  Within that loop I have var b set to generate a random number within the array length.  I have var c set to the array with index of var a.  Then I set the array with index of a, to equal the array with index of b.  Then I set the array with index of b to equal c.  After the loop, I returned the array.  This effectively shuffles the array.

The handleClicked function then runs the checkGuess function with name, and this.updateTopScore passed in.  The checkGuess function starts with the call backs for  name, and cb.  I have a variable for newState which has a spread operator for this state.  I used this to manipulate the state for any given state change going forward.  I put in an if statement to check if the current state of clickedChar includes the name that was passed in.  If true, then I have it set to tell the user that they already picked that character, and to empty the clickedChar array.  I then added a setState method to update the state with the newState variable.  If false, I have it set to push the name of the character into the clickedChar array, then tell the user they are correct.  I then ran the cb function, which coaligns with the updateTopScore with newState, and the alertWin function passed in.

The updateTopScore with the same parameters I mentioned above, and checks whether or not the clickedChar array's length is higher than the topScore.  If true, it increases the topScore by one. (note: TopScore is not set for any cache or cookie storage at this time.  It only tracks the top score for the current session.  I may update this at a later point.)  I then have it set to update the setState again with the newState variable that was updated with this.

After that it runs the cb function, which coaligns with the alertWin Function.  That one only passes in the newState variable, and checks whether or not clickedChar's length is equal to 12 (which is the total number of characters.)  If true, it updates the correct state with "You win!", changes the state for clickedChar to an empty array again, so it no longer is comparing the answers from the previous game.  This effectively resets the score, but keeps the top score, and allows you to play again.



### Instructions for running.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

