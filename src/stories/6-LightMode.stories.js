import React from "react";
import Color from "../ui/atoms/Color";
import Text from "../ui/atoms/Text";
import styled from "styled-components";
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: `Couleurs/ Thèmes et modes de couleurs`,
  component: Color,
  decorators: [withA11y],
};


const ColorBlock = styled.div`
background: ${ props => props.black ? "black" : "white" };
padding: 20px 15px;
color: white;
display: flex;
margin: 0 auto;
border-radius: 10px;
justify-content: space-around;
margin : 10px 0px;
`;


export const LightModeThemeClair =  () => {
  
  return(
    <>
      <Text weight="big" size="xl">Dark Mode - Thème sombre</Text>
      <Text text="xl">Afin de ne pas abîmer les yeux des utilisateurs, le thème sombre de Twitch propose une apparence avec des dominance de noirs et de gris foncés.</Text>
      <ColorBlock black>
        <Color textColor="black" bgColor="#FFFFFF">White</Color>
        <Color textColor="black" bgColor="#F7F7F8">Lightest grey</Color>
        <Color textColor="black" bgColor="#E6E6EA">Light grey</Color>
        <Color textColor="black" bgColor="#53535F">Blue Medium grey</Color>
      </ColorBlock>
      <ColorBlock>
        <Color bgColor="#000000" opacity="50" >Black opacity</Color>
        <Color bgColor="#18181B">Dark Grey</Color>
        <Color bgColor="#18181B">Darkest grey</Color>
      </ColorBlock>
      <ColorBlock>
        <Color bgColor="#0e0e10">Dark blue</Color>
        <Color bgColor="#040109">Dark purple</Color>
        <Color bgColor="#000000">Black</Color>
      </ColorBlock>
    </>
  )
}
