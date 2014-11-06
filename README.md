React-Parse
===========

Sample JS App using [ReactJS](http://facebook.github.io/react/) and [Parse](http://parse.com/)

# Getting Started

### 1. First time using node ?
download and install it : [NodeJS](http://nodejs.org/download/).
### 2. First time with gulp and bower ?
Gulp is a task manager and Bower a package manager, they both need to be installed globally to use the command line tools
Simply run (may need a `sudo`) :
```
npm install -g gulp bower
```

### 3. First time with Compass ?
Compass take care about Sass files to compile them in CSS
Simply run :
```
gem install compass
```

Your environment is now ready to welcome this project
### 4. Download the project and dependencies
``` 
git clone https://github.com/Kemcake/React-Parse.git 
```
```
npm install
```

### 5. Run the project
One simple command and your project is built on every change in the `/build` folder 
```
gulp
```

### 6. Final step
Now you have a working sample React Project, go to `src/js/stores/ParseConfig.json` to enter you Parse App keys.
This sample project is a blog showing a list of Post. To see it working, go on you Parse App and create a class `Post` with 3 colums : `title`, `content`and `name`

# Working example
You can see a fully working example of what it looks like -> [My internship blog](http://blog.remisantos.com)

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

Thanks to [@ArnaudRinquin](https://github.com/ArnaudRinquin) 

Based on [Todomvc-flux](https://github.com/facebook/react/tree/master/examples/todomvc-flux) by Bill Fisher

