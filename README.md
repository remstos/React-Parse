React-Parse
===========

Sample JS App using [ReactJS](http://facebook.github.io/react/) and [Parse](http://parse.com/)

# Getting Started

### 1. First time using node ?
download and install it : [NodeJS](http://nodejs.org/download/).
### 2. First time with bower ?
Bower is a package manager
Simply run (maybe you'll need a `sudo`) :
```
npm install -g bower
```

### 3. First time with Compass ?
Compass take care about Sass files to compile them in CSS
Simply run :
```
gem install compass
```

Your environment is now ready to welcome this project
### 4. Run the project
``` 
git clone https://github.com/Kemcake/React-Parse.git 
```
```
npm install
```
```
npm start
```
and your app is build on every change

To run the app, launch an HTTP server and go to http://localhost/../path/to/../React-Parse/

### 5. Final step
Now you have a working sample React Project, go to `src/js/stores/ParseConfig.json` to enter you Parse App keys.
This sample project is a blog showing a list of Post. To see it working, go on you Parse App and create a class `Post` with 3 colums : `title`, `content`and `name`

# Built with 
What's in the box
* ReactJS
* Parse.com SDK
* Bootstrap
* Sass
* Browserify
* And other cool stuff

# Work In Progress
Be careful, this is a work in progress ! Things may not work as expected



### Todo :
    Use Dispatchers to be more like "Flux" 


# Credit
### Author
* Rémi Santos (@Kemcake)

Based on [Todomvc-flux](https://github.com/facebook/react/tree/master/examples/todomvc-flux) by Bill Fisher

