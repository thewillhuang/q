'use strict';
var React = require('react');
var CommentList = require('./commentList.jsx');
var CommentForm = require('./commentForm.jsx');

var CommentBox = React.createClass({

  render: function() {
    return (
      <div className='CommentBox'>
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});

React.render(
  <CommentBox />,
  document.getElementById('reactRoot')
  );

module.exports = CommentBox;
