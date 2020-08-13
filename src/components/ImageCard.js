import React from 'react';

class ImageCard extends React.Component {
	constructor(props) {
		super();
		this.state = { spans: 0 };
		this.imageRef = React.createRef(); //allow you to reach image props
	}

	componentDidMount() {
		this.imageRef.current.addEventListener('load', this.setSpans); //when data of the image is loaded
	}
	//have to use arrowfunction because callback have to be bind
	setSpans = () => {
		const height = this.imageRef.current.clientHeight;
		const spans = Math.ceil(height / 10);
		this.setState({ spans });
	};
	render() {
		const { alt_description, urls } = this.props.image;
		return (
			//we use JSX style
			<div style={{ gridRowEnd: `span ${this.state.spans}` }}>
				<img ref={this.imageRef} alt={alt_description} src={urls.regular} />
			</div>
		);
	}
}
export default ImageCard;
