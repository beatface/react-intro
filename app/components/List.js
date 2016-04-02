const React = require('react')
const Item = require('../components/Item')
// const ReactDOM = require('react-dom');

const List = React.createClass({
    render: function() {
        var createItem = function(itemText) {
            return (
                <Item>{itemText}</Item>
            );
        };
        return <ul>{this.props.items.map(createItem)}</ul>
    }
});

module.exports = List
