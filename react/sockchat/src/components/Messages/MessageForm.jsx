import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//NEeds to be fixed to better adhere to suggest react standards (controlled component)
class MessageForm extends Component {
	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(e) {
		e.preventDefault();
		// Socket needs handler for 'messageAdded' event, created in server.js
		this.props.emit('messageAdded',{
			timeStamp: Date.now(),
			text: this.refs.text.value.trim(),
			user: this.props.user.name
		});

		// Clear form input
		this.refs.text.value = '';
	}

	render() {
		return(
			<div className="row">
				<form onSubmit={this.onSubmit}>
					<input type="text" className="form-control" ref="text" placeholder="Please type a message"></input>
				</form>
			</div>
		);
	}
}

export default MessageForm;
