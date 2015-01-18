'use strict';
var React = require('react');
var $ = require('jquery');
var CommentList = require('./commentList.jsx');
var CommentForm = require('./commentForm.jsx');

var CommentBox = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    return (
      <div className='CommentBox'>
        <h1>Comments</h1>
        <CommentList data={this.state.data}/>
        <CommentForm />
      </div>
    );
  }
});

React.render(
  <CommentBox url="../data/data.json"/>,
  document.getElementById('reactRoot')
  );

module.exports = CommentBox;
