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
        var request = new XMLHttpRequest();
        request.open('POST', `/api/items/${this.state.item}/${false}`, true);

        request.onload = function() {
          if (request.status >= 200 && request.status < 400) {
            var res = request.responseText;
            console.log(res);
          } else {
            console.log(request.status);
          }
        };

        request.onerror = function() {
          // There was a connection error of some sort
        };
        request.send();
        this.props.onSubmit();
        this.setState({item: ''});
        ReactDOM.findDOMNode(this.refs.item).focus();
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
