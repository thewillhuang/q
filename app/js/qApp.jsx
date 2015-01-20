'use strict';

var React = require('react');
var SelectPatient = require('./selectPatient.jsx');
var Time = require('./displayDate.jsx');
var Grid = require('react-bootstrap/Grid');
var Col = require('react-bootstrap/Col');
var Row = require('react-bootstrap/Row');
var PageHeader = require('react-bootstrap/PageHeader');
var Button = require('react-bootstrap/Button');
// var ButtonToolbar = require('react-bootstrap/ButtonToolbar');

var Qbox = React.createClass({

  render: function() {
    return (
        <div>
        <PageHeader>Queue Selection Page <small>codename Q</small></PageHeader>
        <Grid>
          <Row className="show-grid">
            <Col xs={6} md={4}>
              <code>&lt;{'Select Patients'} /&gt;</code>
              <Time />
              <SelectPatient />
              <Button bsStyle="primary" bsSize="large">Queue</Button>
            </Col>
            <Col xs={13} md={8}><code>&lt;{'Select Doctor'} /&gt;</code></Col>
          </Row>
        </Grid>
        </div>
    );
  }
});

React.render(
  <Qbox />,
  document.getElementById('reactRoot')
  );

module.exports = Qbox;
