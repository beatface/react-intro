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
        return (
            <div className="main-container">
                <nav className="navbar navbar-default" role="navigation">
                    <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
                        React To Dos
                    </div>
                </nav>
                <div className="container">
                    <AddItem onSubmit={this.loadItems} />
                    <List onChange={this.loadItems} items={this.state.items} />
                </div>
            </div>
        )
    }
})

module.exports = Main
