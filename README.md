# Welcome

...to (some of) Edument's React training material! This repo contains a bunch of example code, sorted in...

- `./src/apps` for "bigger" apps
- `./src/examples` for "smaller" single-component examples

Many examples come in different versions (hooks vs class, etc).

## Installation

Simply run `npm install` to download all the dependencies!

## Storybook

The easiest way to see the examples in action is to start the **storybook** ([https://storybook.js.org/](https://storybook.js.org/)) by...

- executing `npm run storybook` in the terminal
- switching to the automatically opened browser window

There you can navigate between the different examples using the story overview to the left. The structure there roughly corresponds to the file locations within `./src`.

For many of the components you can...

- tweak the input props in the bottom **Knobs** tab
- see further information in the **Notes** tab

Storybook has built-in live reload, so if you tweak the source code for a component you will immediately see the changes in the browser.

Don't be afraid to experiment - you can simply `git checkout .` to restore the code to the original state!

## Running apps in isolation

Sometimes you might want to run an example in isolation, and not within the Storybook (maybe to inspect it using the React Dev Tools). For this we have a simple local setup using [ParcelJS](https://parceljs.org):

- Tweak the code in `./runLocally/index.js` to render the component you want to play with
- Execute `npm run start` in the terminal
- Go to http://localhost:1234 in the browser (will open automaticall)

Parcel will also set up live reloading, so tweaking the code will immediately update the browser.

## Creating experiments of your own

While toying with the prebaked examples can be useful, eventually you will want to write code of your own. We suggest that you...

- create a folder `./src/myCode`
- create a subfolder there for each separate experiment

After you have created a component you can either

- create a file where the name ends with `.stories.jsx` and add a story (see the story files for the existing examples) to have it turn up in the Storybook
- run it by itself using the ParcelJS setup described earlier

## Running the test suite

Almost all of the examples - both components and pure logic functions - have corresponding unit tests using [Jest](https://jestjs.io/). To run the tests, simply execute `npm run test` in the terminal.

If you want to execute the tests from a single file (perhaps you are using TDD when writing your own component!), one way is to...

- right-click on the test file in the Visual Studio Code file overview and choose `Copy relative path`
- go to the terminal and write `npx jest <pasted path here>`
