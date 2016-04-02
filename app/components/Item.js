const React = require('react')

const Item = React.createClass({
    updateStatus: function() {
        $.ajax({
            url: `/api/items/${this.props.itemId}`,
            contentType: "application/json",
            method: 'POST',
            data: JSON.stringify({item: this.props.item, completed: !this.props.status})
        })
        this.props.onUpdate()
        return;
    },
    deleteItem: function() {
        $.ajax({
            url: `/api/items/${this.props.itemId}`,
            contentType: "application/json",
            method: 'DELETE',
            success: function(res) {
                console.log(res);
            }
        })
        this.props.onUpdate()
        return;
    },
    render: function(){
        if (this.props.status === false) {
    		return (
                <li className='list-group-item'>
                    <div>{this.props.item}</div>
                    <button type="button" className="btn btn-info" onClick={this.updateStatus}>
                        <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
                    </button>
                </li>
    		)
        } else {
            return (
                <li className='list-group-item'>
                    <div><strike>{this.props.item}</strike></div>
                    <button type="button" className="btn btn-success" onClick={this.updateStatus}>
                        <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
                    </button>
                    <button type="button" className="btn btn-danger" onClick={this.deleteItem}>
                        <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                    </button>
                </li>
            )
        }
	}
})

module.exports = Item
