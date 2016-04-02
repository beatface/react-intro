const React = require('react')
// const ReactDOM = require('react-dom')

const Item = React.createClass({
    render: function(){
		return (
			<li>{this.props.children}</li>
		)
	}
})

module.exports = Item
