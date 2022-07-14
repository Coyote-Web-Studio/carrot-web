export default {
    breakpoints: ["40em", "52em", "64em"],
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
    colors: {
      blue6: '#0029FF',
      orange6: "#EF692B",
      green5: "#6EFF95",
      yellow6: "#F6FB18",
      gray1: "#F5F5F5",
      gray2: "#E9E9E9",
      gray3: '#CCCCCC',
      gray9: "#272727",
      gray10: "#0B0B0B",
      white: '#FFFFFF',
      black: '#000000',
    },
    space: [0, 4, 8, 16, 32, 64, 128, 256],
    fonts: {
      body: "system-ui, sans-serif",
      heading: "inherit",
      monospace: "IBM Plex Mono, monospace",
    },
    fontWeights: {
      body: 400,
      heading: 700,
      bold: 700,
    },
    lineHeights: {
      body: 1.5,
      heading: 1.25,
    },
    shadows: {
      small: "0 0 4px rgba(0, 0, 0, .125)",
      large: "0 0 24px rgba(0, 0, 0, .125)",
    },
    variants: {},
    boxSizes: {
      defaultBox: {
        width: [
          "calc(100vw - 4rem)", 
          "calc(100vw - 9.6rem)", 
          "1280px"
        ],
        mx: "auto",
      },
      reducedBox: {
        width: ["calc(100vw - 4rem)", "calc(100vw - 9.6rem)", "1124px"],
        mx: "auto",
      },
      expandedBox: {
        // bg: ['yellow', 'blue', 'red', 'purple'],
        width: [
          "calc(100vw - 2rem)", 
          "calc(100vw - 4.8rem)", 
          "calc(100vw - 4.8rem)",
          "134rem"
        ],
        left: [
          '1rem',
          '2.4rem',
          '2.4rem',
          "calc(50% - (134rem / 2))"
        ],
        '@media screen and (min-width: 1720px)': {
          width: "calc(160rem)",
          left: "calc(50% - (160rem / 2))"
        },
      },
    },
    text: {
      paragraph: {
        fontSize: ["1.4rem", "1.4rem", "1.9rem"],
        lineHeight: ["2.2rem", "2.2rem", "2.85rem"],
        fontFamily: 'IBM Plex Mono'
      },
    },
    buttons: {
      primary: {
        color: "white",
        bg: "primary",
      },
    },
    misc: {
        invertedProtocolLogo: false
    }
  };
  