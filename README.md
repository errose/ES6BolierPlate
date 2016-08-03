# ES6BolierPlate

This is an boilerplate repo to make it easy to start a frontend project from scratch using ES6 standards. The boilerplate includes the MOO Design Guide and the MOO Toolkit as it's base. 

### Getting up and running

1. Clone this repo from `https://github.com/bajras/ES6BolierPlate.git`
2. Create a new project folder and Run `npm install` from the root directory
3. Run `npm run dev`

```bash
# Clone the repo...
git clone https://github.com/bajras/ES6BolierPlate.git
cd new-project

# Then, you need to install all the dependencies...
npm install

# Run / Watch from Webpack
npm run dev
```

### Techonolgy Used

1. Babel - Transpiles ES6 code into regular ES5 
2. Webpack - Bundling and Building
3. JSHint -  To detect errors and potential problems in your JavaScript code 
4. mutualofomaha-ui-toolkit - Use the standards from design guide
5. JQuery - Requried for mutualofomaha-ui-toolkit
6. SourceMap - To see / debug the code in ES6

### Folder Structure

The boilerplate folder structure is inspired from the Angular2 CLI folder structure which tries to layout the files in a modular way where each folder is like a component(different parts of the webpage/webapp) which does one thing only. So rather than creating one folder for Javascript and one folder for CSS and adding every files inside them, we create a multiple folders for different components and include all the neccesarry files that are required for that component inside the folder itself. This makes it easy find the things that are related to a component and ecapsulate it's assets.
