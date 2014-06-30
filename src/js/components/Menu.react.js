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
var Bootstrap = require('react-bootstrap');
var Navbar = Bootstrap.Navbar;
var Nav = Bootstrap.Nav;
var NavItem = Bootstrap.NavItem;
var DropdownButton = Bootstrap.DropdownButton;
var MenuItem = Bootstrap.MenuItem;
var Menu = React.createClass({

  getInitialState: function() {
    return {title:"React+Parse"};
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
        <Navbar>
          <Nav>
            <a className="navbar-brand" href="#">{this.state.title}</a>
            <NavItem key={1} href="#">Link</NavItem>
            <NavItem key={2} href="#">Link</NavItem>
            <DropdownButton key={3} title="Dropdown">
              <MenuItem key="1">Action</MenuItem>
              <MenuItem key="2">Another action</MenuItem>
              <MenuItem key="3">Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem key="4">Separated link</MenuItem>
            </DropdownButton>
          </Nav>
        </Navbar>
        
  	);
  },

  /**
   * Event handler for 'change' events coming from the TodoStore
   */
  _onChange: function() {
    //this.setState(getTodoState());
  }

});

module.exports = Menu;


