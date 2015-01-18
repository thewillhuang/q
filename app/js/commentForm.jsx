'use strict';

var React = require('react');

var CommentForm = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    e.stopPropagation();
    var author = this.refs.author.getDOMNode().value.trim();
    var text = this.refs.text.getDOMNode().value.trim();
    if (!text || !author) {
      return;
    }
    this.props.onCommentSubmit({author: author, text: text});
    this.refs.author.getDOMNode().value = '';
    this.refs.text.getDOMNode().value = '';
    return;
  },
  render: function() {
    return (
      <form className="commentForm">
        <input type="text" placeholder = "Name" />
        <input type="text" placeholder = "Comment" />
        <input type="submit" value = "Post" />
      </form>
    );
  }

});

module.exports = CommentForm;
