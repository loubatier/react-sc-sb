import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ColorBlock = styled.div`
  color: ${(props) => props.textColor};
  padding: 30px 30px;
  width: 100%;
  text-align: center;
  margin: 0 10px;
  flex-shrink: 1;
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
  position: relative;
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  position absolute;
  top: 0px;
  left: 0px;
  border-radius: 10px;
  background: ${(props) => props.bgColor};
  z-index: 0;
  opacity: ${(props) => props.opacity}%;
`;

const Wording = styled.div`
  z-index: 2;
  position: relative;
`;

const Color = ({ bgColor, textColor, children, opacity }) => {
  return (
    <ColorBlock textColor={textColor}>
      <Background opacity={opacity} bgColor={bgColor}></Background>
      <Wording>
        <span>{children}</span>
        {children && bgColor ? <br /> : null}
        <span>{bgColor}</span>
        {opacity && bgColor ? <br /> : null}
        {opacity !== "100" && <span>{opacity} %</span>}
      </Wording>
    </ColorBlock>
  );
};

Color.propTypes = {
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  opacity: PropTypes.string,
  children: PropTypes.object,
};

Color.defaultProps = {
  bgColor: "black",
  textColor: "white",
  opacity: "100",
  children: "",
};

export default Color;
