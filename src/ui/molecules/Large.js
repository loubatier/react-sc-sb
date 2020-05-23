// IMPORT DES LIBRAIRIE
import React from 'react';
import styled from 'styled-components';
// IMPORT DES COMPONENTS
import Badge from '../atoms/Badge';
import Description from '../atoms/Description';
import Img, {imgSize} from '../atoms/img';
import Title from '../atoms/Title';

// STYLE DU COMPONENT
const LargeStyle = styled.div`
  width: 344px;
  height: 86px;
  display: flex;
`
export default () => {
  return(
    <LargeStyle>
      <Img size={imgSize.large}/>
      <div>
        <Title color="#fefefe" text="Just Chatting"/>
        <Description description="253,2 k spectateurs"/>
        <Badge text="IRL" color="#fefefe" bg="#3a2e5d"/>
      </div>
    </LargeStyle>
  )
}
