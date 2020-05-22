import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const InputTextWrapper = styled.input`
  border: none;
  width: 256px;
  height: 40px;
  left: 100px;
  top: 824px;
  background: #3A3A3D;
  border-radius: 4px;
  color: #C4C4C5;
  font-family: Roobert TRIAL;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 140%;
  padding-left: 12px;
  ${InputTextWrapper}:focus {
    border: none;
    background: #000000;
    box-shadow: 0px 0px 0px 3px #9247FF;
    border-radius: 4px;
  }
`;

const InputText = ({ placeholder }) => {
  return <InputTextWrapper
      type="text"
      placeholder={placeholder}
  />
};

export default InputText;