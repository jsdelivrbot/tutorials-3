import React, {Component} from 'react';

class Search extends Component {
	onSubmit(event) {
		event.preventDefault();
		let username = this.refs.username.value.trim();
		if (!username) {
			alert('Please enter a username');
			return;
		}
		this.props.onFormSubmit(username);
		this.refs.username.value = '';
	}

	render() {
		return(
			<div>
				<form className="form-inline"onSubmit={this.onSubmit.bind(this)}>
					<input className="form-control" placeholder="Username" type="text" ref="username" className="form-control" />
					<button type="submit" className="btn btn-default">Search GitHub Users</button>
				</form>
			</div>
		);
	}
}

export default Search;
