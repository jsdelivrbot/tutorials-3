import React, {Component} from 'react';

class Repo extends Component {
	render() {
		const {repo} = this.props;
		if (repo.description === null)
			repo.description = "No description";
			
		return(
			<li className="list-group-item">
				<a className="repoLink" href={repo.html_url}>{repo.name}</a>: {repo.description}
			</li>
		);
	}
}

export default Repo;
