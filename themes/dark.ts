import Theme from "../types/Theme";
import baseTheme from "./base";

export default {
  ...baseTheme,
  name: 'dark',
  colors: {
    ...baseTheme.colors,
  
    background: "#0B0B0B",
    logoColor: "#F5F5F5",
    textColor: "#F5F5F5",
    gridColor: "#272727",
  
    buttonBackground: baseTheme.colors.orange6,
    buttonBorder: baseTheme.colors.gray10,
  
    customerCommentBackground: baseTheme.colors.gray1,
    customerCommentGrid: "#CCCCCC",
    customerCommentText: baseTheme.colors.gray10,
  
    protocolCardBackground: "#0B0B0B",
    protocolCardLine: "#F5F5F5",
  
    cardBackground: "#0B0B0B",
    cardText: "#F5F5F5",
    cardLine: "#F5F5F5",
    cardButtonHover: "#272727",
  
    carrotInNumbersGrid: '#ED5B16',
    footerBackground: 'white',
  
  },
  misc: {
    patternImage: 'url("/Pattern.svg")',
    footerPatternImage: 'url("/Pattern_light.svg")',
    invertedProtocolLogo: true
  }
} as Theme;