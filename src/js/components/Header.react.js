/**
 * @jsx React.DOM
 */


var React = require('react');

var Header = React.createClass({



  /**
   * @return {object}
   */
  render: function() {
    var subtitle = this.props.subtitle || "tiny blog, endless possiblities"
  	return (
        <div className="header">
          <h1>{this.props.title}</h1>
          <p className="lead">{subtitle}</p> 
        </div>
  	);
  },


});

module.exports = Header;


