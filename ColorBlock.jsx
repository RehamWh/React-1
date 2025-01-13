import React from 'react';

const ColorBlock = ({ colors }) => {
  const blockStyle = {
    width: '50px',
    height: '50px',
    backgroundColor: colors || 'gray',
  };

  return <div style={blockStyle}></div>;
};

export default ColorBlock;