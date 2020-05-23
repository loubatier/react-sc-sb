import { create } from '@storybook/theming/create';

export default create({
  base: 'dark',

  colorPrimary: 'hotpink',
  colorSecondary: 'deepskyblue',

  // UI
  appBg: '#000000',
  appContentBg: '#18181B',
  appBorderColor: 'grey',
  appBorderRadius: 10,

  // Typography
  fontBase: '"Roobert TRIAL", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'white',
  textInverseColor: 'black',

  // Toolbar default and active colors
  barTextColor: 'white',
  barSelectedColor: 'white',
  barBg: 'black',

  // Form colors
  inputBg: 'white',
  inputBorder: 'white',
  inputTextColor: 'white',
  inputBorderRadius: 4,

  brandTitle: 'My custom storybook',
  brandUrl: 'https://example.com',
  brandImage: 'Logo.svg',
});