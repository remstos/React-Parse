/**
 *
 * @jsx React.DOM
 */

var React = require('react');
var ReactPropTypes = React.PropTypes;
var PostStore = require('../../stores/PostStore');
var Header = require('../Header.react');

var TimelineItem = require('./TimelineItem.react');
var Link = require('react-router-component').Link;

var Timeline = React.createClass({

  getInitialState: function() {
    return { allPosts: null};
  },
  
  
  componentDidMount: function() {
    PostStore.getAll(this._getAllPosts);
  },
  /**
   * @return {object}
   */
  render: function() {
    var allPosts = this.state.allPosts;
    var posts = [];
    if (!allPosts) {
      posts.push(<h3 className="posts-status">Loading posts ... </h3>);
    }
    else {
      if (allPosts.length == 0) {
        posts.push(<h3 className="posts-status">No posts</h3>);
      }
      for (var key in allPosts) {
        var invert = false;
        if(key%2)
          invert = true;
        posts.push(<TimelineItem key={key} inverted={invert} post={allPosts[key]} />);
      }
    }
    return (
      <div>
        <Header title="React+Parse Blog"/>
        <div className="timeline-container col-md-8 col-md-offset-2 col-sm-12">
          <ul className="timeline">
            {posts}
          </ul>
        </div>
      </div>
    );
  },

  _getAllPosts: function(posts){
    this.setState({allPosts:posts});
  }
});

module.exports = Timeline;
