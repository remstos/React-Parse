/**
 * @jsx React.DOM
 */

var React = require('react');
var moment = require('moment');
var ReactPropTypes = React.PropTypes;
var Link = require('react-router-component').Link;

var TimelineItem = React.createClass({

  
  getInitialState: function() {
    return {};
  },

  /**
   * @return {object}
   */
  render: function() {
    var post = this.props.post;
    var href = '/#/post/'+post.get('name');
    var invert = this.props.inverted? 'timeline-inverted':'';
    var humanDate = moment(post.createdAt).from(new Date()); 
    return (
        <li className={invert}>
          <div className="timeline-badge"><i className="fa fa-check"></i></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <Link href={href}> 
                <h4 className="timeline-title">{post.get('title')}</h4>
              </Link>
              <p><small className="text-muted"><i className="fa fa-clock"></i>{humanDate}</small></p>
            </div>
            <div className="timeline-body">
              <p>{post.get('content')}</p>
            </div>
          </div>
        </li>
    );
  },
  
  _onClick: function() {
    console.log(this.props.post.id);
  },

});

module.exports = TimelineItem;
