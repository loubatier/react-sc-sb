import React from "react";
import StyleGuildColor from "../ui/particles/Colors";
import Color from "../ui/atoms/Color";
import Text from "../ui/atoms/Text";
import styled from "styled-components";
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: `Couleurs/Brand Colors-Couleurs de Marque`,
  component: Color,
  decorators: [withA11y],
};




export const BrandColor =  () => {

  const ColorBlock = styled.div`
    background: ${ StyleGuildColor.black };
    padding: 20px 15px;
    color: white;
    display: flex;
    max-width: 600px;
    margin: 0 auto;
    border-radius: 10px;
    justify-content: space-around;
    `;

  return(
    <>
      <Text weight="big" size="xl">Brand Colors</Text>
      <Text bgColor="#858585" size="small">Couleurs de Marque</Text>
      <Text text="xl">L’unique couleur de marque de Twitch est le violet électrique, accompagné de ses différentes nuances. Il est utilisé pour accentuer l’identité graphique de Twitch et rendre la plateforme reconnaissable.</Text>
      <ColorBlock>
        <Color bgColor="#772CE8">Brand dark</Color>
        <Color bgColor="#9146FF">Brand base</Color>
        <Color bgColor="#A970FF">brand light</Color>
      </ColorBlock>
    </>
  )
}