'use strict';
var React = require('react');
var Comment = require('./comment.jsx');

var CommentList = React.createClass({

  render: function() {
    return (
      <div className="commentList">
        <Comment author="Will">This is one comment</Comment>
        <Comment author="Kate">This is another comment</Comment>
      </div>
    );
  }

});

module.exports = CommentList;
