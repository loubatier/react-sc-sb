import React from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';
import TextSize from '../particles/TextSize';

const WarpperText = styled.p`
color:  ${props => props.color};
font-size:  ${props => TextSize[props.size]};
font-weight: ${props => props.weight !== "big" ? "200" : "800"};
font-family: Roboto;
`;

const Text = ({ children, size, weight ,color }) => {
  return(<WarpperText color={color} weight={weight} size={size} >{children}</WarpperText>)
}

export default Text


Text.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.object,
  weight: PropTypes.string,
};



Text.defaultProps = {
  children: "",
  size: "base",
  weight: "midel",
  color: "white",
};
