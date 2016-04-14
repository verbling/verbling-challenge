# Verbling React Challenge Challenge

![](docs/spec.png)

### Requirements

App is simple scrollable and searchable list where list items can be expanded.

- Item area is a scrollable area with fixed 200px width and 400px height
- "Add" button prompts for input (can use window.prompt) and adds a list item to the top of the list
- List items are 50px in height when closed, and any height when opened (so that content fits).
- When list item is closed, text within should be ellipsed.
- Search bar should search show a subset of the list that matches the search string anywhere in it's contents.
- List item can be clicked, which toggles it's open/closed state.
- "Open all" button opens all list items
- "Close all" button closes all list items
- "Toggle all" button toggles the open state of all items.
- Structure data layer and viewer layers as you think fits the challenge

### Submission

- Edit `submission/verbling/` with your code
- Place all your client-side code in that repository, must include `index.html` in your submission folder.
- Comments are encouraged but don't overdo it, simple code speaks for itself.
- Feel free to use any packages you want, just make sure they're installed via `npm install`.
- Run the server like this: `cd server` then `npm install` (just once) then `npm start`.3
- Remember to use `styles.css` in your `index.html` solution.
- To build the Javascript bundle, use `webpack`. (`webpack --watch` to watch files)
- When you are done, please contact us with link to your repo, preferably on GitHub.
- Please do not copy or plagiarize other submissions, it's easy to spot.

### Criteria

- Must be React. We use ES6 features, but you are free not to.
- Must solve the requirements listed above
- As elegant code as possible

**Elegance** here is not a subjective criteria. Let's define code elegance to be "*the ability of a programmer to easily understand the program's flow and state coordination, being completely familiar with the tools used but completely unfamiliar with the codebase*". Special attention is given to "familiar with the tools" and "unfamiliar with the codebase". This means if I know nothing about ClojureScript, a ClojureScript solution to this problem might still be very elegant to an experienced ClojureScript developer. On the other hand, unfamiliarity with the codebase is important to determine that, because usually as you grow familiar with a codebase, you find it easier to understand how it works. **Our objective is to make it easy for a peer programmer to join a codebase and quickly understand how it works.**
