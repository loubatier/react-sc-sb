import React from "react"
import Color from "../ui/atoms/Color";
import Text from "../ui/atoms/Text";

export default {
  title: `Couleurs/ Couleurs`,
  component: Color,
};


export const Couleurs =  () => {
  return(
    <div>
      <Text weight="big" size="xxl">Couleurs</Text>
      <Text >Les couleurs de Twitch sont conçues pour être claires et reconnaissables. Elles s’articulent autour de plusieurs catégories : les couleurs de Marque, les couleurs sémantiques, les couleurs du Light Mode et les couleurs du Dark Mode.</Text>
    </div>
  )
}

