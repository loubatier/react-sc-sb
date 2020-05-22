import React from 'react';
import InputText from '../ui/atoms/InputText';
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
    title: 'InputText',
    component: InputText,
    decorators: [withKnobs]
};

export const Default = () => <InputText placeholder="Ecrire sur le chat de Siphano"/>;

