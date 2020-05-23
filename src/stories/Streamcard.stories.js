import React from 'react';
import { withKnobs, text } from "@storybook/addon-knobs";
import Streamcard from '../ui/atoms/Streamcard';

export default {
    title: 'Streamcard',
    component: Streamcard,
    decorators: [withKnobs]
};

export const Offline = () => 
  <Streamcard 
    name={text("Nom du streamer", "Doigby")} 
    title={text("Titre du stream", "FNCS Solo (Manche retour)")} 
    picProfil={text("URL de la photo de profil", "https://static-cdn.jtvnw.net/jtv_user_pictures/5367712d-06e1-49aa-a698-0284d8371b9a-profile_image-70x70.png")} 
    picture={text("URL de l'image du stream", "https://static-cdn.jtvnw.net/previews-ttv/live_user_skyyart-440x248.jpg")}
    game={text("Jeu", "Fortnite")}
    category={text("Catégorie", "Chill")}
    online={false} 
    nbSpec={text("Nombre  de spectateurs", "1,7k")}
  />
;

export const Online = () => 
  <Streamcard 
    name={text("Nom du streamer", "Doigby")} 
    title={text("Titre du stream", "FNCS Solo (Manche retour)")} 
    picProfil={text("URL de la photo de profil", "https://static-cdn.jtvnw.net/jtv_user_pictures/5367712d-06e1-49aa-a698-0284d8371b9a-profile_image-70x70.png")} 
    picture={text("URL de l'image du stream", "https://static-cdn.jtvnw.net/previews-ttv/live_user_skyyart-440x248.jpg")}
    game={text("Jeu", "Fortnite")}
    category={text("Catégorie", "Chill")}
    online={true} 
    nbSpec={text("Nombre  de spectateurs", "1,7k")}
  />
;
