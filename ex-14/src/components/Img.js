import React from 'react';
import srcImg from '../images/img2.jpg';

function Img() {
  return (
    <div>
      <img src="/images/img1.jpg" alt="public" width="200" />
      <img src={srcImg} alt="src" width="200" />
    </div>
  );
}

export default Img;