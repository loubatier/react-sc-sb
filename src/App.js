import React from "react";
import Title, { colors, types } from "./ui/atoms/Title";

export default function App() {
      return (
            <div className="App">
                <Title text="Parcourir" color={colors.white} type={types.navigation}/>
                <Title text="Parcourir" color={colors.purple} type={types.navigation}/>
                
                <Title text="Chaîne" color={colors.white} type={types.main}/>
                <Title text="Chaîne" color={colors.purple} type={types.main}/>
            </div>
      );
}
