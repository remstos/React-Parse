/**
 *
 * @jsx React.DOM
 */

var React = require('react');
var ReactPropTypes = React.PropTypes;
var PostPreview = require('./PostPreview.react')
var PostStore = require('../../stores/PostStore');

var Blog = React.createClass({

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
    // This section should be hidden by default
    // and shown when there are posts.
    if (!this.state.allPosts) {
      return <p>Loading posts...</p>;
    }
    if (this.state.allPosts.length < 1) {
      return <p>No posts :(</p>;
    }

    var allPosts = this.state.allPosts;
    var posts = [];

    for (var key in allPosts) {
      posts.push(<PostPreview key={key} post={allPosts[key]} />);
    }

    return (
      <section id="main">
        <h1> Posts list </h1>
        <ul id="posts-list">{posts}</ul>
      </section>
    );
  },

  _getAllPosts: function(posts){
    this.setState({allPosts:posts});
  }
});

module.exports = Blog;
