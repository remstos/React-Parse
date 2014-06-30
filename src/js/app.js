/**
 * @jsx React.DOM
 */

var React = require('react');

var Parse = require('parse').Parse;
Parse.initialize('PARSE_APP_ID', 'PARSE_JS_KEY');

var App = require('./components/App.react');
React.renderComponent(
  <App />,
  document.getElementById('app')
);