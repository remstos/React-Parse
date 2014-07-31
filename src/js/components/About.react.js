/**
 * @jsx React.DOM
 */



var React = require('react');
var Link = require('react-router-component').Link;
var Header = require('./Header.react');

var About = React.createClass({


  /**
   * @return {object}
   */
  render: function() {
    var aHackerWay = (<a target="_blank" href="https://www.google.fr/maps/preview?client=safari&oe=UTF-8&ie=UTF-8&fb=1&gl=fr&cid=2172900328401578441&q=Facebook+Inc.&ei=lwzaU6iaH_SX0QW3kICgAg&ved=0CLgBEPwSMA8">1 Hacker Way</a>);
    
    var aOpenSource = (<a target="_blank" href="https://github.com/Kemcake/React-Parse">`Open Source`</a>);

  	return (
  	    <div>
  	      <Header title="React+Parse Blog - About"/>

          <div className="col-md-8 col-md-offset-2">
            <h2> {"You know who I am ?"} </h2>
            <p className="lead">
              {"Well, you have a few ways to know me and feel free to cheers me"}
              <br/>
              <a target="_blank" href="https://facebook.com/santos.remi"><i className="fa fa-facebook"></i> {"to see what I love"}</a>
              <br/>
              <a target="_blank" href="https://twitter.com/kemcake"><i className="fa fa-twitter"></i> {"to discover what I share"}</a>
              <br/>
              <a target="_blank" href="https://github.com/Kemcake"><i className="fa fa-github"></i> {"to watch what I'm working on"}</a>
              <br/>
              <a target="_blank" href="http://fr.linkedin.com/pub/remi-santos/5a/a64/9b/"><i className="fa fa-linkedin"></i> {"to connect with me"}</a>
              <br/>
              <a target="_blank" href="mailto:santos.remi@icloud.com"><i className="fa fa-envelope"></i> {"to contact me"}</a>
            </p> 
            <br/> 
            <h2 className="text-left">{"What about this blog ?"}</h2>
            <p className="lead">
              {"During my 2014 summer internship, I had to maintain a blog on what I was working, what I learned, etc. So here it is ! Hope you guys enjoy it"}
            </p>
            <br/><br/>
            <h2> {"Why it's called `React + Parse Blog` ?"} </h2>
            <p className="lead">
                {"That's a good question ! In fact, I didn't want to simply create a wordpress blog and loose time searching a nice theme and configure a server blah,blah,blah. So I decided to create something that teach me a lot, that could be usefull for the future, and also usefull for other people. I made this sample project that embed ReactJS and Parse SDK, two great things from "}{aHackerWay}{", plus some usefull tricksand this is "}{aOpenSource}{" :)"}
            </p>
            
          </div>  
        </div>
  	);
  },


});

module.exports = About;


