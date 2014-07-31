/**
 * @jsx React.DOM
 */
var React = require('react');
var Parse = require('parse').Parse;

/* First Level components */
var Menu = require('./Menu.react');
var Header = require('./Header.react');
var Footer = require('./Footer.react');

/* ROOTER */
var Router = require('react-router-component');
var Locations = Router.Locations;
var Location = Router.Location;
var NotFound = Router.NotFound;

/* PAGES COMPONENTS */
var Timeline = require('./Timeline/Timeline.react');
var PostView = require('./PostView.react');
var About = require('./About.react');


var App = React.createClass({
  
  getInitialState: function() {
    return {path: window.location.pathname+window.location.hash};
  },

  componentWillMount: function() {
    console.log(this.state.path);
  },


  /**
   * @return {object}
   */
  render: function() {    
  	return (
        <div className="app parallax-bckg">
          <Menu title="Remi Santos" />
          <div className="main-container">
            <Locations ref="pages" path={this.state.path}>
              <Location path="/" handler={Timeline} />
              <Location path="/#/post/:post" handler={PostView} />
              <Location path="/#/about" handler={About} />
              <NotFound handler={Timeline} />
            </Locations>
          </div>
          <Footer/>        
        </div>
  	);
  },


});

module.exports = App;
