# Backbone setup
### 1) npm init
### 2) npm install jquery backbone underscore node-sass serve--save (will save as dependencies)
### 3) npm install browserify watchify --save-dev (will save as devDependencies)
### 4) touch index.html styles.scss styles.css main.js model.js collection.js collectionView.js modelView.js templates.js layout.js formView.js
### 5) ./node_modules/.bin/browserify main.js -o bundle.js (creates a bundle.js file)
### 6) set up package.JSON scripts:
    - "bundle": "./node_modules/.bin/browserify main.js -o bundle.js",
    - "watch": "./node_modules/.bin/watchify main.js -o bundle.js & ./node_modules/.bin/node-sass styles.scss styles.css -w",
    - "serve": "./node_modules/.bin/serve",
    - "sass": "./node_modules/.bin/node-sass styles.scss styles.css",
    - "start": "npm run watch & npm run serve"
### 7) touch .gitignore > node_modules
### 8) ./node_modules/.bin/serve
### 9) npm run bundle (will recompile)
### 10) npm run start (will bundle and compile everything)
