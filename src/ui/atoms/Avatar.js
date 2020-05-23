import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Sizes from "../particles/Sizes";

export const sizes = {
    small: "32px",
    medium: "36px",
    big: "42px"
};

const AvatarWrapper = styled.div`
  height: ${props => (props.size)};
  width: ${props => (props.size)};
  background-color:grey;
  border-radius: 100px
`;

const Avatar = props => {
    const { size } = props;
    return <AvatarWrapper size={size}></AvatarWrapper>;
};

Avatar.propTypes = {
    size: PropTypes.oneOf(Object.keys(sizes)),
};

Avatar.defaultProps = {
    size: sizes.small
};

export default Avatar;
