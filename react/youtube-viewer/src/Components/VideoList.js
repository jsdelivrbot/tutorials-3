import React from 'react';

import VideoListItem from './VideoListItem';

const VideoList = (props) => {
	const videoItems = props.videos.map((video) => {
		return (
			<VideoListItem
				onVideoSelect={props.onVideoSelect}
				key={video.etag}
				video={video}
			/>
		);
	});

	return (
		// React is smart and will properly render an array into li elements
		<ul className="col-md-4 list-group">
			{videoItems}
		</ul>
	);
};

export default VideoList;

<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
	<div className="form-group">
		<p className="text-center mb-0"><label htmlFor="statusSelect">Status</label></p>
		<Field name="status" id="statusSelect" component="select" className="form-control mt-0">
			<option value="Reading">Reading</option>
			<option value="Completed">Completed</option>
			<option value="Plan to Read">Plan to Read</option>
		</Field>
		<p className="text-center mt-0 mb-0"><label htmlFor="ratingSelect">Rating</label></p>
		<Field name="rating" id="ratingSelect" component="select" className="form-control mt-0">
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
			<option value="4">4</option>
			<option value="5">5</option>
			<option value="none">Rate Later</option>
		</Field>
	</div>
	<p className="text-center"><button type="submit" className="btn btn-outline-primary">Submit</button></p>
</form>
