import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Colors from "../particles/Colors";
import Types from "../particles/Types";

export const colors = {
    purple: "purple",
    white: "white"
};

export const types = {
    main: "main",
    navigation: "navigation"
};

const TitleWrapper = styled.span`
  color: ${props => (props.color === colors.purple ? Colors.brand_primary : Colors.brand_light)};
  font-weight: ${props => (props.type === types.main ? Types.main.fontWeight  : Types.navigation.fontWeight)};
  font-size: ${props => (props.type === types.main ? Types.main.fontSize  : Types.navigation.fontSize)};
  font-family: 'Roobert';

  background: #0e0e10;
  display: block;
  margin: 8px;
  padding: 8px
`;

const Title = props => {
    const { text, color, type } = props;
    return <TitleWrapper type={type} color={color}>{text}</TitleWrapper>;
};

Title.propTypes = {
    type: PropTypes.oneOf(Object.keys(types)),
    color: PropTypes.oneOf(Object.keys(colors)),
    text: PropTypes.string
};

Title.defaultProps = {
    type: types.main,
    color: colors.white,
    text: "Titre par défaut 😏"
};

export default Title;
