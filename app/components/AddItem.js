const React = require('react')
const ReactDOM = require('react-dom')

const AddItem = React.createClass({
    getInitialState: function() {
        return {item: ''};
    },
    handleKeyDown: function(event){
		if (event.keyCode !== 13) {
			return;
		}
        $.ajax({
            url: `/api/items`,
            contentType: "application/json",
            method: 'POST',
            data: JSON.stringify({item: this.state.item, completed: false})
        })
        this.props.onSubmit()
        this.setState({item: ''})
        return;
    },
    onChange: function(event){
        this.setState({
            item: event.target.value
        });
    },
    render: function() {
        return (
            <div className="input-group">
                <span className="input-group-addon" id="basic-addon3" autofocus="true">What do you need to do?</span>
                <input
                    type="text"
                    className="form-control"
                    id="basic-url"
                    aria-describedby="basic-addon3"
                    onChange={this.onChange}
                    onKeyDown={this.handleKeyDown}
                    value={this.state.item}
                />
            </div>
        )
    }
})

module.exports = AddItem
