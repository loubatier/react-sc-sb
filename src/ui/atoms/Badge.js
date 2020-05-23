import React from "react";
import styled, { css } from "styled-components";


const BadgeWrapper = styled.span`
margin-right: 8px;
padding: 4px 8px;
border-radius: 22px;
color: ${(props) => props.color};
background-color: ${(props) => props.color};
font-family: sans-serif;
font-size: 12px;
`;

const Badge = props => {
    const { text } = props;
    return <BadgeWrapper>{text}</BadgeWrapper>;
};

export default Badge;



