import baseTheme from './base';

export default {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,

    background: "#FEFEFE",
    logoColor: "#0B0B0B",
    textColor: "#0B0B0B",
    gridColor: "#F5F5F5",

    buttonBackground: baseTheme.colors.orange6,
    buttonBorder: baseTheme.colors.gray10,

    customerCommentBackground: "#0B0B0B",
    customerCommentGrid: "#272727",
    customerCommentText: "#F5F5F5",

    protocolCardBackground: '#F5F5F5',
    protocolCardLine: '#0B0B0B',

    cardBackground: '#FEFEFE',
    cardText: '#0B0B0B',
    cardLine: '#0B0B0B',
    cardButtonHover: '#E9E9E9',

    carrotInNumbersGrid: '#ED5B16',
    footerBackground: baseTheme.colors.gray10,

  },

  patternImage: 'url("/Pattern_light.svg")',
  footerPatternImage: 'url("/Pattern.svg")'
};