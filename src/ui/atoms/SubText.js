import React from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';
import TextSize from '../particles/TextSize';

const WarpperText = styled.p`
  color:  ${props => props.color};
  font-size:  ${props => TextSize[props.size]};
  font-family: Roboto;
`;

const Text = ({ children, size , color}) => {
  return(<WarpperText size={size} color={color} >{children}</WarpperText>)
}

export default Text


Text.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.object,
};

Text.defaultProps = {
  children: "",
  size: "small",
  color: "white",
};