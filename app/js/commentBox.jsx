'use strict';
var React = require('react');
var CommentList = require('./commentList.jsx');
var CommentForm = require('./commentForm.jsx');
var data = [
  {author: "WIll", text: "William comment"},
  {author: "Kate", text: "kate reply"}
];

var CommentBox = React.createClass({

  render: function() {
    return (
      <div className='CommentBox'>
        <h1>Comments</h1>
        <CommentList data={this.props.data}/>
        <CommentForm />
      </div>
    );
  }
});

React.render(
  <CommentBox data={data}/>,
  document.getElementById('reactRoot')
  );

module.exports = CommentBox;
