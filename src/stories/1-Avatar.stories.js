import React from 'react';
import { action } from '@storybook/addon-actions';
import Avatar, { sizes } from '../ui/atoms/Avatar';
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
    title: 'Avatar',
    component: Avatar,
    decorators: [withKnobs]
};

export const Small = () => <Avatar size={sizes.small}/>;

export const Medium = () => <Avatar size={sizes.medium}/>;

export const Big = () => <Avatar size={sizes.big}/>;
