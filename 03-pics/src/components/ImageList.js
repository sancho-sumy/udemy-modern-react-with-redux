import React from 'react';
import ImageCard from './ImageCard';
import classes from './ImageList.module.css';

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className={classes.imageList}>{images}</div>;
};

export default ImageList;
