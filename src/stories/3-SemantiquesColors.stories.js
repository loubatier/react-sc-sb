import React from "react";
import StyleGuildColor from "../ui/particles/Colors";
import Color from "../ui/atoms/Color";
import Text from "../ui/atoms/Text";
import SubText from "../ui/atoms/SubText";
import styled from "styled-components";
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: `Couleurs/ Status Colors`,
  component: Color,
  decorators: [withA11y],
};


export const StatusColorsCouleursSemantiques =  () => {

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
      <Text weight="big" size="xl">Status Colors</Text>
      <SubText bgColor="#858585">Couleurs sémantiques</SubText>
      <Text>Les couleurs sémantiques ont des significations précises et sont utilisées de manière cohérente. Ces couleurs doivent être utilisées avec parcimonie, afin d’éviter une surcharge d’informations.</Text>
      <ColorBlock>
        <Color bgColor="#54BC58">Success</Color>
        <Color bgColor="#D93528">Alert</Color>
      </ColorBlock>
    </>
  )
}
