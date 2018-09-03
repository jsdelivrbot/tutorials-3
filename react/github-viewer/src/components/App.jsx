import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Profile from './github/Profile.jsx';
import Search from './github/Search.jsx';

class App extends Component {

	constructor (props) {
		super(props);
		this.state = {
			username: 'algilardi',
			userData: [],
			userRepos: [],
			perPage: 10
		};
	}

	// get user data from GitHub
	getUserData () {
		$.ajax({
			url: 'https://api.github.com/users/' + this.state.username +
			'?client_id=' + this.props.clientID +
			'&client_secret=' + this.props.clientSecret,

			dataType: 'JSON',
			cache: false,

			success: function (data) {
				this.setState({userData: data});
			}.bind(this),

			error: function (xhr, status, err) {
				this.setState({username: null});
				alert(err);
			}.bind(this)
		});
	}

	// Get user repos
	getUserRepos () {
		$.ajax({
			url: 'https://api.github.com/users/' + this.state.username+
			'/repos?per_page=' + this.state.perPage +
			'&client_id=' + this.props.clientID +
			'&client_secret=' + this.props.clientSecret + '&sort=created',

			dataType: 'JSON',
			cache: false,

			success: function (data) {
				this.setState({userRepos: data});
			}.bind(this),

			error: function (xhr, status, err) {
				this.setState({username: null});
				alert(err);
			}.bind(this)
		});
	}

	handleFormSubmit(username) {
		this.setState({username: username}, function() {
			this.getUserData();
			this.getUserRepos();
		});
	}

	componentDidMount() {
		this.getUserData();
		this.getUserRepos();
	}

	render () {
		return (
			<div>
				<Search onFormSubmit = {this.handleFormSubmit.bind(this)}/>
				<Profile {...this.state}/>
			</div>
		);
	}
}

App.propTypes = {
	clientID: React.PropTypes.string,
	clientSecret: React.PropTypes.string
};

App.defaultProps = {
	clientID: '82c50ca759f90f426ce8',
	clientSecret: '820123348cf466c47599f73693361fff7ba47c78'
};

export default App;
