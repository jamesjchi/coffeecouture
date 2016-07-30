var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./components/header');

var App = React.createClass({
  render: function() {
    return <Header name="Coffee Couture" />;
  }
});

ReactDOM.render(<App />, document.getElementById('container'));