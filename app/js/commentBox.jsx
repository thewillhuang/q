'use strict';
var React = require('react');
var $ = require('jquery');
var CommentList = require('./commentList.jsx');
var CommentForm = require('./commentForm.jsx');

var CommentBox = React.createClass({
  getInitialState: function() {
    return {data: []};
  },

  loadCommentsFromServer: function(){
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
  handleCommentSubmit: function(comment){
    //optimistic handling
    var comments = this.state.data;
    var newComments = comments.concat([comment]);
    this.setState({data: newComments});
    //submit to the server and refresh the list
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: comment,
      success: function(data){
        this.setState({data:data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  componentDidMount: function() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },

  render: function() {
    return (
      <div className='CommentBox'>
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
});

React.render(
  <CommentBox url="../data/data.json" pollInterval={2000}/>,
  document.getElementById('reactRoot')
  );

module.exports = CommentBox;
