import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class UserForm extends Component {
	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(e) {
		e.preventDefault();

		var name = this.refs.name.value.trim();

		this.props.setUser({name: name});
		this.props.emit('userJoined', {name:name});

		this.refs.name.value = '';
	}

	render() {
		return(
			<div>
				<h3>Chat Login</h3>
				<form onSubmit={this.onSubmit}>
					<input type="text" className="form-control" ref="name" placeholder="Choose a Username" />
				</form>
			</div>
		);
	}
}

export default UserForm;
