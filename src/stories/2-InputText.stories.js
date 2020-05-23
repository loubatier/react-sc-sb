import React from 'react';
import InputText from '../ui/molecules/InputText';
import { withKnobs, boolean, text } from "@storybook/addon-knobs";

export default {
    title: 'InputText',
    component: InputText,
    decorators: [withKnobs]
};

export const Input = () =>
    <InputText
        placeholder={text("Placeholder", "Ecrire sur le chat de Siphano")}
        isIconVisible={boolean("isIconVisible", true)}
    />

