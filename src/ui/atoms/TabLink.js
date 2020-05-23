import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export const colors = {
	purple: "#AF85CD",
	black: "#FFF",
};

export const borderBottom = {
	selected: "2px solid #AF85CD",
};

const ContentTabs = styled.a`
	color: ${(props) => (props.active ? colors.purple : colors.black)};
	border-bottom: ${(props) => (props.active ? borderBottom.selected : "")};
	text-decoration: none;
	margin: 10px;
	padding-bottom: 12px;
`;

const TabLink = (props) => {
	const { text, url, isActive } = props;

	return (
		<ContentTabs active={isActive} href={`${url}`}>
			{text}
		</ContentTabs>
	);
};

TabLink.propTypes = {
	text: PropTypes.string,
	url: PropTypes.string,
	isActive: PropTypes.bool,
};

TabLink.defaultProps = {
	active: false,
};

export default TabLink;
