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
var Pages = Router.Pages;
var Page = Router.Page;
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

  componentWillUnmount: function() {
  },

  /**
   * @return {object}
   */
  render: function() {    
  	return (
      <div className="app parallax-bckg">
        <Menu title="React+Parse"/>
        <Header/>
        <div className="main-container">
          <Pages path={this.state.path}>
            <Page path="/" handler={Timeline} />
            <Page path="/#/post/:post" handler={PostView} />
            <Page path="/#/about" handler={About} />
            <NotFound handler={Timeline} />
          </Pages>
        </div>
        <Footer/>        
      </div>
  	);
  },

  /**
   * Event handler for 'change' events coming from the TodoStore
   */
  _onChange: function() {

  }

});

module.exports = App;
