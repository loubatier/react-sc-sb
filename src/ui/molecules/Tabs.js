import React from "react";
import TabLink from "../atoms/TabLink";
import { categoriesAvailable } from "../../categoriesAvailable";

export default function Tabs() {
	const categoryIsActive = (category) => {
		if (window.location.pathname === category) {
			return true;
		}
	};

	return (
		<div>
			{categoriesAvailable.map((category) => (
				<TabLink
					text={category.text}
					key={category.id}
					url={category.params}
					isActive={categoryIsActive(category.params)}
				/>
			))}
		</div>
	);
}
