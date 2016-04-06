'use strict';

const React = require('react')
const AddItem = require('../components/AddItem')
const List = require('../components/List')

const Main = React.createClass({
    getInitialState: function(){
        return {items: []}
    },
    componentDidMount: function() {
        this.loadItems()
    },
    loadItems: function () {
        $.ajax({
            url: `/api/items`,
            method: 'GET',
            success: function (data, status) {
                this.setState({items: data})
            }.bind(this),
            error: function(xhr, status, err) {
                console.log(xhr, status, err);
            }.bind(this)
        })
    },
    render: function() {
        const completeItems = this.state.items.filter(function(item) {
            return item.completed
        })
        const incompleteItems = this.state.items.filter(function(item){
            return !item.completed
        })
        return (
            <div className="main-container">
                <nav className="navbar navbar-default" role="navigation">
                    <div className="col-sm-7 col-sm-offset-5" style={{marginTop: 12}}>
                        React To Dos
                    </div>
                </nav>
                <div className="container">
                    <AddItem onSubmit={this.loadItems} />
                    <h1>{incompleteItems.length > 0 ? 'To Do' : ''}</h1>
                    <List onChange={this.loadItems} items={incompleteItems} />
                    <h1>{completeItems.length > 0 ? 'To Done' : ''}</h1>
                    <List onChange={this.loadItems} items={completeItems} />
                </div>
            </div>
        )
    }
})

module.exports = Main
