const React = require('react')
const AddItem = require('../components/AddItem')
const List = require('../components/List')

const Main = React.createClass({
    getInitialState: function(){
		return {items: []};
	},
    updateItems: function(newItem) {
        var allItems = this.state.items.concat([newItem])
        this.setState({items: allItems})
    },
    render: function() {
        console.log("main.js, line 14", this.props)
        return (
            <div className="main-container">
                <nav className="navbar navbar-default" role="navigation">
                    <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
                        React To Dos
                    </div>
                </nav>
                <div className="container">
                    <AddItem onSubmit={this.updateItems} />
                    <List items={this.state.items} />
                </div>
            </div>
        )
    }
})

module.exports = Main
