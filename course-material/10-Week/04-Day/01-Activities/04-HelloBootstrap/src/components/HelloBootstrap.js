import React from "react";
import Button from 'react-bootstrap/lib/Button';

const HelloBootstrap = () => (
  <div className="main-container">
    <div className="jumbotron">
      <h1>Hello, world!</h1>
      <p>I'm a jumbotron!</p>
      <p>
        <Button bsStyle="warning">Learn more</Button>
      </p>
    </div>
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">Panel title</h3>
      </div>
      <div className="panel-body">Panel content</div>
    </div>
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">Panel title</h3>
      </div>
      <div className="panel-body">Panel content</div>
    </div>
  </div>
);

export default HelloBootstrap;
