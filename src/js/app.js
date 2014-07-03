/**
 * @jsx React.DOM
 */
var $ = require('jquery');

var React = require('react');

var Parse = require('parse').Parse;
var ParseConfig = require('./stores/ParseConfig.json');
Parse.initialize(ParseConfig.APP_ID, ParseConfig.JS_KEY);

var App = require('./components/App.react');
React.renderComponent(
  <App />,
  document.body
);



// PARALLAX function
/**
 * Author: Heather Corey
 * jQuery Simple Parallax Plugin
 *
 */
 
(function($) {
 
    $.fn.parallax = function(options) {
 
        var windowHeight = $(window).height();
 
        // Establish default settings
        var settings = $.extend({
            speed        : 0.15
        }, options);
 
        // Iterate over each object in collection
        return this.each( function() {
 
        	// Save a reference to the element
        	var $this = $(this);
 
        	// Set up Scroll Handler
        	$(document).scroll(function(){
 
    		        var scrollTop = $(window).scrollTop();
            	        var offset = $this.offset().top;
            	        var height = $this.outerHeight();
 
    		// Check if above or below viewport
			if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
				return;
			}
 
			var yBgPosition = Math.round((offset - scrollTop) * settings.speed);
 
                 // Apply the Y Background Position to Set the Parallax Effect
    			$this.css('background-position', 'center ' + yBgPosition + 'px');
                
        	});
        });
    }
}($));

$('.parallax-bckg').parallax({
	speed :	0.35
});

$('.bg-2').parallax({
	speed :	0.25
});
