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

export const DarkModeThemeSombre =  () => {
  return(
    <>
      <Text weight="big" size="xl">Dark Mode - Thème sombre</Text>
      <Text text="xl">Afin de ne pas abîmer les yeux des utilisateurs, le thème sombre de Twitch propose une apparence avec des dominance de noirs et de gris foncés.</Text>
      <ColorBlock>
        <Color bgColor="#000000">Black</Color>
        <Color bgColor="#040109">Dark purple</Color>
        <Color bgColor="#0e0e10">Dark blue</Color>
      </ColorBlock>

      <ColorBlock>
        <Color bgColor="#18181B">Darkest grey</Color>
        <Color bgColor="#18181B">Dark Grey</Color>
        <Color bgColor="#18181B">Medium grey</Color>
      </ColorBlock>

      <ColorBlock black >
        <Color  textColor="black" bgColor="#ADADB8">Blue grey</Color>
        <Color  textColor="black" bgColor="#9F9F9F">Medium grey</Color>
        <Color  textColor="black" bgColor="#FFFFFF" opacity="20">White opacity</Color>
      </ColorBlock>

      <ColorBlock black >
        <Color textColor="black" bgColor="#DEDEE3">Light grey</Color>
        <Color textColor="black" bgColor="#EFEFF1">Lightest grey</Color>
        <Color  textColor="black" bgColor="#FFFFFF">White opacity</Color>
      </ColorBlock>
    </>
  )
}