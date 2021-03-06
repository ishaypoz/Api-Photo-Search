import React from 'react';
import unsplash from '../api/unsplash'; //make http request
//Component/Pages we made
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
	state = { images: [] };
	onSearchSubmit = async (term) => {
		const response = await unsplash.get('/search/photos', {
			params: { query: term }
		});
		//.then((response) => console.log(response.data.results));//then return a promise
		this.setState({ images: response.data.results });
	};
	render() {
		return (
			<div className="ui container" style={{ marginTop: '10px' }}>
				<SearchBar onSubmit={this.onSearchSubmit} />
				Found: {this.state.images.length} Images
				<ImageList images={this.state.images} />
			</div>
		);
	}
}

export default App;
