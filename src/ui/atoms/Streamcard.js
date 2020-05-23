import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StreamcardWrapper = styled.div`
  background: #000000;
  color:  #FFFFFF;
  font-size: 16px;
  width: 350px;
  font-family: 'Helvetica Neue';
`;

const StreamcardDivPic = styled.div`
  position: relative;
`;

const StreamcardPicture = styled.img`
  width: 100%;
`;

const StreamcardLive = styled.span`
  background: #D93528;
  padding: 5px 7px;
  position: absolute;
  top: 10px;
  left: 10px;
  border-radius: 7px;
  font-weight: bold;
  font-size: 12px;
`;

const StreamcardSpec = styled.span`
  background: rgba(0, 0, 0, 0.5);
  padding: 5px 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  border-radius: 7px;
  font-weight: bold;
  font-size: 12px;
`;

const StreamcardInfos = styled.div`
  display: flex;
  padding: 10px 0;
`;

const StreamcardProfilePic = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background: pink;
  margin-right: 10px;
`;

const StreamcardTexts = styled.div`
  display: flex;
  flex-direction: column;
`;

const StreamcardName = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 5px 0;
`;

const StreamcardTitle = styled.h3`
  font-size: 14px;
  font-weight: normal;
  margin: 0 0 5px 0;
`;

const StreamcardGame = styled.h4`
  font-size: 14px;
  font-weight: normal;
  color: #9F9F9F;
  margin: 0 0 5px 0;
`;

const StreamcardCategory = styled.span`
  padding: 5px 10px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 30px;
  width: fit-content;
  font-size: 12px;
`;




const Streamcard = props => {
  const { name, title, game, online, picture, picProfil, category, nbSpec } = props;
  return (
    <StreamcardWrapper online={online} >
      <StreamcardDivPic>
        <StreamcardPicture src={picture} />
        {online ? <StreamcardLive>LIVE</StreamcardLive> : ''}
        {online ? <StreamcardSpec>{nbSpec} spectateurs</StreamcardSpec> : ''}
      </StreamcardDivPic>
      <StreamcardInfos>
        <StreamcardProfilePic src={picProfil} />
        <StreamcardTexts>
          <StreamcardName>{name}</StreamcardName>
          <StreamcardTitle>{title}</StreamcardTitle>
          <StreamcardGame>{game}</StreamcardGame>
          <StreamcardCategory>{category}</StreamcardCategory>
        </StreamcardTexts>
      </StreamcardInfos>
    </StreamcardWrapper>
  );
};

Streamcard.propTypes = {
    name: PropTypes.string,
    title: PropTypes.string,
    game: PropTypes.string,
    online: PropTypes.bool,
    picture: PropTypes.string,
    picProfil: PropTypes.string
};

export default Streamcard;
