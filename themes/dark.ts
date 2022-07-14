import baseTheme from "./base";

export default {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,

    background: "#0B0B0B",
    logoColor: "#F5F5F5",
    textColor: "#F5F5F5",
    gridColor: "#272727",

    buttonBackground: baseTheme.colors.orange6,
    buttonBorder: baseTheme.colors.gray10,

    customerCommentBackground: "#E9E9E9",
    customerCommentGrid: "#CCCCCC",
    customerCommentText: "#272727",

    protocolCardBackground: "#0B0B0B",
    protocolCardLine: "#F5F5F5",

    cardBackground: "#0B0B0B",
    cardText: "#F5F5F5",
    cardLine: "#F5F5F5",
    cardButtonHover: "#272727",

    shadow: "#E9E9E9",
    carrotInNumbersGrid: '#ED5B16'
  },
  misc: {
    invertedProtocolLogo: true
  }
};
