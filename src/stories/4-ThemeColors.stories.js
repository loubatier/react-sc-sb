import React from "react";
import Color from "../ui/atoms/Color";
import Text from "../ui/atoms/Text";

export default {
  title: `Couleurs/ Thèmes et modes de couleurs`,
  component: Color,
};


export const ThemesEtModesDeCouleurs =  () => {
  return(
    <>
      <Text weight="big" size="xl">Thèmes et modes de couleurs</Text>
      <Text text="xl">AEtant une plateforme très utilisée la nuit, Twitch propose 2 thèmes de couleurs : 1 thème clair et 1 thème sombre, sur lesquels il est possible de basculer à tout moment. Ainsi, de nombreux éléments d’interface peuvent prendre 2 apparences différentes.</Text>
    </>
  )
}
