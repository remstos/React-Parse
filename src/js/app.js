/**
 * @jsx React.DOM
 */

var React = require('react');

var Parse = require('parse').Parse;
var ParseConfig = require('./stores/ParseConfig.json');
Parse.initialize(ParseConfig.APP_ID, ParseConfig.JS_KEY);

var App = require('./components/App.react');
React.renderComponent(
  <App />,
  document.body
);