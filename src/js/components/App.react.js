/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @jsx React.DOM
 */

/**
 * This component operates as a "Controller-View".  It listens for changes in
 * the TodoStore and passes the new data to its children.
 */


var React = require('react');
/*
var Bootstrap = require('react-bootstrap');
var Navbar = Bootstrap.Navbar;
var Nav = Bootstrap.Nav;
var NavItem = Bootstrap.NavItem;
var DropdownButton = Bootstrap.DropdownButton;
var MenuItem = Bootstrap.MenuItem;
*/
var Menu = require('./Menu.react')
var App = React.createClass({

  getInitialState: function() {
    return {route: window.location.pathname};
  },

  componentDidMount: function() {
    console.log(this.state);
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
    //this.setState(getTodoState());
  }

});

module.exports = App;
