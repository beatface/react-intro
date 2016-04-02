const React = require('react');
const ReactDOM = require('react-dom');

const List = React.createClass({
    render: function() {
        return (
            <ul>
                <li>A list item</li>
            </ul>
        )
    }
});

module.exports = List;
