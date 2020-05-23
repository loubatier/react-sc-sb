import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text } from "@storybook/addon-knobs";
import TabLink from "../ui/atoms/TabLink";

export default {
	title: "TabLink",
	component: TabLink,
	decorators: [withKnobs],
};

export const Active = () => (
	<TabLink text={text("Label", "Catégories")} isActive={true} />
);

export const notActive = () => (
	<TabLink text={text("Label", "Catégories")} isActive={false} />
);
