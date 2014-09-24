/**
 * @jsx React.DOM
 */

var React = require('react');

var Footer = React.createClass({

  /**
   * @return {object}
   */
  render: function() {
  	return (
        <footer id="info">
    			<p>Sample React Project</p>
    			<p>GitHub : <a href="http://github.com/Kemcake/React-Parse">Kemcake/React-Parse</a></p>
    			<p>Based on work of <a href="http://github.com/ArnaudRinquin">Arnaud Rinquin</a> and <a href="http://facebook.com/bill.fisher.771">Bill Fisher</a></p>
    		</footer>
  	);
  },


});

module.exports = Footer;


