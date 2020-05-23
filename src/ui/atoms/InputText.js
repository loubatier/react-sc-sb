import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Icon from "./Icon";

const InputTextWrapper = styled.input`
  box-sizing: border-box;
  border: none;
  width: 256px;
  background: #3a3a3d;
  border-radius: 4px;
  color: #c4c4c5;
  font-family: Roobert TRIAL;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 140%;
  padding: 10px 12px 10px 12px;
  ${InputTextWrapper}:focus {
    border: none;
    outline: none;
    background: #000000;
    box-shadow: 0 0 0 2px #9146FF inset;
  }
`;

const InputText = ({ placeholder, isIconVisible }) => {
  return (
      <>
        <InputTextWrapper type="text" placeholder={placeholder} />
        {isIconVisible && (
            <Icon/>
        )}
      </>
  )
};

InputText.propTypes = {
  placeholder: PropTypes.string,
};

export default InputText;
