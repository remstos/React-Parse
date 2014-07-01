/**
 * @jsx React.DOM
 */

var React = require('react');
var ReactPropTypes = React.PropTypes;
var Link = require('react-router-component').Link;

var PostPreview = React.createClass({

  
  getInitialState: function() {
    return {};
  },

  /**
   * @return {object}
   */
  render: function() {
    var post = this.props.post;
    var href = '/#/post/'+post.get('name');
    return (
      <li key={post.id}>
        <div className="view">
          <Link href={href}>
            <label onClick={this._onClick}>
              {post.get('title')}
            </label>
          </Link>
        </div>
      </li>
    );
  },
  
  _onClick: function() {
    console.log('click');
    console.log(this.props.post.id);
  },

});

module.exports = PostPreview;
