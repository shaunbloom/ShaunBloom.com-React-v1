var React = require('react');
var ReactDOM = require('react-dom');

var Application = require('./components/Application');

ReactDOM.render(<Application />, document.getElementById('react-application'));

if (typeof window !== 'undefined') {
    window.React = React;
}