/**
 * @jsx React.DOM
 */

var React = require('react');
var ReactPropTypes = React.PropTypes;
var Link = require('react-router-component').Link;
var Header = require('./Header.react');

var PostStore = require('../stores/PostStore');
var PostView = React.createClass({

  
  getInitialState: function() {
    return { post: null};
  },


  componentWillMount: function() {
    postName = this.props.post;
    PostStore.getByName(postName,this._getPost);
  },
  
  /**
   * @return {object}
   */
  render: function() {
    var post = this.state.post;
    if(!post) {
      return (<p>loading post ...</p>);
    }
    return (
      <div>
        <Header title={post.get('title')} subtitle="by Rémi Santos"/>
        <div className="post-view">
          <h1>{post.get('title')}</h1>
          <p>{post.get('content')}</p>
        </div>
      </div>
    );
  },

  _getPost: function (post) {
    this.setState({post:post});
  }
});

module.exports = PostView;
