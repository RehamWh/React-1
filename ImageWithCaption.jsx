//Reham Wahbi , Francis Muzalbat
import React from 'react';

const ImageWithCaption = ({ src, caption }) => {
  return (
    <div>
      {src ? (
        <img src={src} alt={caption} style={{ maxWidth: '100%' }} />
      ) : (
        <div>Image not available</div>
      )}
      <p>{caption}</p>
    </div>
  );
};

export default ImageWithCaption;
