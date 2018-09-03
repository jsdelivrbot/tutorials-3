import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
	renderField(field) {
		const { meta: {touched, error} } = field;
		const className = `form-group ${touched && error ? 'has-danger' : ''}`;

		return (
			<div className={className}>
				<label>{field.label}</label>
				<input
					className="form-control"
					type="text"
					// shortcut for doing all the individual handler functions like
					// onChange = {field.input.onChange}
					// just passing in pre-generated event handlers
					{...field.input}
				/>
				{// form states: pristine -> touched, invalid
				 // if the form is untouched, dont show any errors
				touched ? error : ''}
			</div>
		);
	}

	onSubmit(values) {
		this.props.createPost(values, () => {
			this.props.history.push('/');
		});
	}

	render() {
		const { handleSubmit } = this.props;
		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<Field
					label="Title"
					// what piece of state is being edited/described?
					name="title"
					// takes a function or component that will be used to
					// display the actual field component
					// no () after function because we're just passing a reference,
					// not calling it
					component={this.renderField}
				/>
				<Field
					label="Categories"
					name="categories"
					component={this.renderField}
				/>
				<Field
					label="Post Content"
					name="content"
					component={this.renderField}
				/>
				<button type="submit" className="btn btn-primary">Submit</button>
				<Link to="/" className="btn btn-danger">Cancel</Link>
			</form>
		);
	}
}

// called automatically on submittal by redux-form
// values is an object that contains all values entered in the form
function validate(values) {
	const errors = {};

	console.log(values);

	// error properties match up with Field name when rendering
	if (!values.title) {
		errors.title = "Enter a title!";
	}
	if (!values.categories) {
		errors.categories = "Enter some categories!";
	}
	if (!values.content) {
		errors.content = "Enter some post content!";
	}

	// if errors is empty, form is fine to submit
	// otherwise redux form assumes the form is invalid
	return errors;
}

// pass in one config option function
// form property is the name of the form
export default reduxForm({
	// unique string for each form
	form: 'PostsNewForm',
	validate: validate
})(
	connect(null, { createPost })(PostsNew)
);
