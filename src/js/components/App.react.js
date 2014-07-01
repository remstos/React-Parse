/**
 * @jsx React.DOM
 */
var React = require('react');
var Parse = require('parse').Parse;

var Menu = require('./Menu.react');
var Router = require('react-router-component')
var Locations = Router.Locations
var Location = Router.Location

var Blog = require('./Blog/Blog.react');
var PostView = require('./Blog/PostView.react');

var App = React.createClass({

  getInitialState: function() {
    return {route: window.location.hash};
  },

  componentDidMount: function() {
  },

  componentWillUnmount: function() {
  },

  /**
   * @return {object}
   */
  render: function() {    
  	return (
      <div>
        <Menu title="Reactit">
        </Menu>
        <Locations>
          <Location path="/" handler={Blog} />
          <Location path="/post/:post" handler={PostView} />
        </Locations>
        <footer id="info">
    			<p>Sample React Project</p>
    			<p>Based on work of <a href="http://facebook.com/bill.fisher.771">Bill Fisher</a></p>
    			<p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
    		</footer>
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
