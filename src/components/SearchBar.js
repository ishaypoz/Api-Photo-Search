import React from 'react';

class SearchBar extends React.Component {
	state = { term: '' };
	onFormSubmit = (event) => {
		event.preventDefault();

		this.props.onSubmit(this.state.term); //if we dont use arrow function to bind the this in app will get this of props object that is the input html object.
	};
	render() {
		return (
			<div className="ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<label>Image SearchBar</label>
						<input
							type="text"
							value={this.state.term}
							onChange={(event) => this.setState({ term: event.target.value })}
						/>
					</div>
				</form>
			</div>
		);
	}
}
export default SearchBar;
