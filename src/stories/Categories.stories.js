// IMPORT DES LIBRAIRIE
import React from 'react';
import { action } from '@storybook/addon-actions';
import { files } from '@storybook/addon-knobs';

//IMPORT COMPONENT
import Title, {sizes} from '../ui/atoms/Title';
import Desc from '../ui/atoms/Description';

import { Button } from '@storybook/react/demo';
import  Img, {imgSize} from '../ui/atoms/img';
import styled from "styled-components";
import { withKnobs, text, color  } from "@storybook/addon-knobs";
import {SmallBlock } from '../ui/molecules/Small';
import {VeryLargeBlock } from '../ui/molecules/VeryLarge';
import Large from '../ui/molecules/Large'
import {SmallBadgeStyle} from '../ui/molecules/SmallWithBadge';


export default {
  title : 'Categories',
  component: [Title, Button, Img],
  decorators: [withKnobs],
    parameters: {
        backgrounds: [
            { name: 'background', value: '#15121C', default: true }
        ]
    },
};



export const Small = () => {
  return(
    <SmallBlock>
      <Img size={imgSize.small}/>
      <Title text={text("Label", "Just Chatting")} size={sizes.desc} color="white"/>
      <Desc description="253,2  k spectateurs" />
    </SmallBlock>
  )
}


export const VeryLarge = () => {
  return(
    <VeryLargeBlock>
      <Img size={imgSize.veryLarge}/>
      <Title color="#fefefe" text={text("Label", "Just Chatting")} size={sizes.title}/>
    </VeryLargeBlock>
  )
}


export const SmallWithBadge = () => {
  return(
    <SmallBadgeStyle>
      <Img size={imgSize.small}/>
      <Title text={text("Label", "Just Chatting")} size={sizes.desc} color="white"/>
      <Desc description="253,2  k spectateurs" />
    </SmallBadgeStyle>

  )
}

export const LargeVersion = () => {
  return (
    <Large></Large>
  )
}




