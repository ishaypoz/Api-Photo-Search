import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = (props) => {
	//can make insteage of image just take the values inside the json image
	const images = props.images.map(
		(image) /*{ id, alt_description, urls } instead of taking image and then (image.urls/id/alt_description)*/ => {
			return <ImageCard key={image.id} image={image} />;
		}
	);
	return <div className="image-list"> {images} </div>;
};

export default ImageList;
