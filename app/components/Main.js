const React = require('react')
const AddItem = require('../components/AddItem')
const List = require('../components/List')
var allItems;
var request = new XMLHttpRequest();
request.open('GET', `/api/items`, true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    allItems = JSON.parse(request.responseText)
    allItems = allItems.map((todo) => {
        return {
            item: todo.item,
            completed: todo.completed
        }
    })
    console.log(allItems);
  } else {
    console.log(request.status)
  }
};

request.onerror = function() {
  // There was a connection error of some sort
};
request.send();

const Main = React.createClass({
    getInitialState: function(){
        return {items: []}
    },
    updateItems: function() {

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
