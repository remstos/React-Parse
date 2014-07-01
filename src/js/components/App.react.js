/**
 * @jsx React.DOM
 */
var React = require('react');
var Parse = require('parse').Parse;

var Menu = require('./Menu.react');
var Router = require('react-router-component')
var Pages = Router.Pages
var Page = Router.Page
var NotFound = Router.NotFound;

var Blog = require('./Blog/Blog.react');
var PostView = require('./Blog/PostView.react');

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
      <div>
        <Menu title="Reactit">
        </Menu>
        <Pages path={this.state.path}>
          <Page path="/" handler={Blog} />
          <Page path="/#/post/:post" handler={PostView} />
          <Page path="/#/about" handler={About} />
          <NotFound handler={Blog} />
        </Pages>
        <hr/>
        <footer id="info">
    			<p>Sample React Project</p>
    			<p>GitHub : <a href="http://github.com/Kemcake/React-Parse">Kemcake/React-Parse</a></p>
    			<p>Based on work of <a href="http://facebook.com/bill.fisher.771">Bill Fisher</a></p>
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
