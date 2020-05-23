import React from "react";
import Tabs from "./ui/molecules/Tabs";
import TabLink from "./ui/atoms/TabLink";
import './App.css'

export default function App() {
	return (
		<div className="App">
			<div className="atomes">
				<h2 className="title">Atomes : </h2>
				<TabLink text={"Actif"} isActive={true} />
				<TabLink text={"Pas actif"} isActive={false} />
			</div>
			<div className="molecules">
				<h2 className="title">Molecules : </h2>
				<Tabs />
			</div>
		</div>
	);
}
