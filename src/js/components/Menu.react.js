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
var Router = require('react-router-component');
var Link = Router.Link;

var Menu = React.createClass({
  
  getInitialState: function() {
    return { 
      links: [
        {title:"About",href:"/#/about"},
        {title:"Link",href:"/"}
      ]
    };
  },

  componentDidMount: function() {
    console.log(this.refs);
  },

  componentWillUnmount: function() {
  },

  /**
   * @return {object}
   */
  render: function() {
    var _this = this;
  	return (
        <Navbar className="navbar-fixed-top">
          <Nav>
            <Link className="navbar-brand" href="/#/">{this.props.title}</Link>
            <li>
              <Link href="/#/about">About</Link>
            </li>
            <li>
              <a href="https://github.com/Kemcake/React-Parse" target="_blank">
                This blog on GitHub
              </a>
            </li>
          </Nav>
        </Navbar>
        
  	);
  }

});

module.exports = Menu;


