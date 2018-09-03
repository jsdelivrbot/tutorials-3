// Same as const Component = React.Component;
import React, {Component} from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {term: ''};
	}

	render() {
		return (
			<div className="search-bar">
				<form onSubmit={this.handleSearch.bind(this)}>
					<input
						placeholder="Search Videos..."
						value={this.state.term}
						onChange={event => this.setState({term: event.target.value})}
					/>
					<button>Search</button>
				</form>

			</div>
		);
	}

	handleSearch(e) {
		e.preventDefault();
		this.props.onSearchSubmit(this.state.term);
		this.setState({term: ''});
	}
}

export default SearchBar;
