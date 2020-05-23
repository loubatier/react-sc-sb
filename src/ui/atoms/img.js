import React from 'react';
import defaultBackground from '../../assets/img/Thumbnail.png';
import styled from 'styled-components';

const image = {
  src: defaultBackground,
  alt: 'my image',
};

export const imgSize = {
  small : "88px",
  veryLarge : "104px",
  large: "72px"
}

const ImageStyled = styled.img`
  background-size: cover;
  width: ${props=> (props.size)};
  height: 86px;
  margin-right: 10px;
`

const Img = ({ src, size }) => (
  <ImageStyled src={image.src} size={imgSize[size]}/>
);

export default Img;
