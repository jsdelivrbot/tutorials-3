import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Message extends Component {
	render() {
		// message = this.props.message
		// Destructuring assignment is lit brah
		const {message} = this.props;
		var formattedTime = this.formatTime(message.timeStamp);

		return(
			<div className="message">
				<strong>{message.user}</strong> {formattedTime} - {message.text}
			</div>
		);
	}

	formatTime(timeStamp) {
		var dt = new Date(timeStamp * 1000);
		var hours = dt.getHours();
		var minutes = dt.getMinutes();
		var secs = dt.getSeconds();

		if (hours < 10)
			hours = '0' + hours;
		if (minutes < 10)
			minutes = '0' + minutes;
		if (secs < 10)
			secs = '0' + secs;

		return hours+":"+minutes+":"+secs;
	}
}

export default Message;
