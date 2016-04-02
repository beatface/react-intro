const React = require('react');

const Main = React.createClass({
    getInitalState: {
        items: []
    },
    updateItems: function(newItem) {
        var allItems = this.state.items.concat([newItem])
        this.setState({items: allItems})
    }
    render: function() {
        console.log(this.props)
        return (
            <div className="main-container">
                <nav className="navbar navbar-default" role="navigation">
                    <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
                        React To Dos
                    </div>
                </nav>
                <div className="container">
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon3" autofocus="true">What do you need to do?</span>
                        <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"/>
                    </div>
                    {this.props.children}
                </div>
            </div>
        )
    }
});

module.exports = Main;
