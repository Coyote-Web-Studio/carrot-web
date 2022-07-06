export default {
    breakpoints: ["360px", "768px", "1440px"],
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
    colors: {
      blue6: '#0029FF',
      orange6: "#EC672C",
      green5: "#7DF882",
      yellow6: "#F6FB18",
      gray1: "#F5F5F5",
      gray2: "#E9E9E9",
      gray3: '#CCCCCC',
      gray9: "#272727",
      gray10: "#0B0B0B",

      background: "#0B0B0B",
      logoColor: "#F5F5F5",
      textColor: "#F5F5F5",
      gridColor: "#272727",

      customerCommentBackground: "#E9E9E9",
      customerCommentGrid: "#CCCCCC",
      customerCommentText: "#272727",

      protocolCardBackground: '#0B0B0B',
      protocolCardLine: '#F5F5F5',
      
      cardBackground: '#0B0B0B',
      cardText: '#F5F5F5',
      cardLine: '#F5F5F5',
      cardButtonHover: '#272727'
    },
    space: [0, 4, 8, 16, 32, 64, 128, 256],
    fonts: {
      body: "system-ui, sans-serif",
      heading: "inherit",
      monospace: "Menlo, monospace",
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
        width: ["calc(100vw - 4rem)", "calc(100vw - 9.6rem)", "1248px", "1600px"],
        mx: "auto",
      },
      reducedBox: {
        width: ["calc(100vw - 2rem)", "calc(100vw - 2rem)", "100%"],
        mx: "auto",
      },
      expandedBox: {
        width: ["calc(100vw - 2rem)", "calc(100vw - 4.8rem)", "100%"],
        mx: "auto",
      },
    },
    text: {
      paragraph: {
        fontSize: "1.4rem",
        lineHeight: "2.2rem",
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
        invertedProtocolLogo: true
    }
  };
  