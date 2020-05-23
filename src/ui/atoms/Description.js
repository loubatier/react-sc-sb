import React from "react";
import styled from "styled-components";
// import PropTypes from "prop-types";
import FontSize from '../particles/FontSize';

export const sizes = {
  title : "18px",
  desc : "12px"
}

const Texte = styled.h2`
  color: white;
  margin:0;
  padding:0;
  margin-top:5px;
  color: #9F9F9F;
  font-family: 'Roobert TRIAL';
  font-size: ${FontSize .size_secondary}
`

const Desc = props => {
  const {taille, description} = props;
  return <Texte taille={taille}>{description}</Texte>
}


export default Desc;
