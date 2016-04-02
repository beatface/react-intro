const React = require('react')
const Item = require('../components/Item')

const List = React.createClass({
    render: function() {
        var createItem = function(item) {
            return (
                <Item key={item._id} item={item.item} itemId={item._id} status={item.completed} onUpdate={this.props.onChange}></Item>
            )
        }.bind(this)
        return <ul>{this.props.items.map(createItem)}</ul>
    }
});

module.exports = List
