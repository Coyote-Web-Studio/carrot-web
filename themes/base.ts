// There seems to be a bug with rebass or styled system that prevents you from ochanging the default breakpoints. These are custom breakpoints we are using to complement the default ones the default styled system breakpoints. 

const breakpoints = ["640px", "831px", "1023px", "1440px", "1919px"];
// [phone, tablet, tablet-xl, desktop, desktop-xl];

export default {
  breakpoints: breakpoints,
  colors: {
    blue6: '#0029FF',
    orange6: "#EF692B",
    orange7: "#D55C25",
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
  fonts: {
    body: "system-ui, sans-serif",
    heading: "inherit",
    monospace: "IBM Plex Mono, monospace",
  },
  boxSizes: {
    defaultBox: {
      mx: "auto",
      width: [
        "calc(100vw - 4.8rem)", 
        "60rem", 
        null,
        "88rem"
      ],
      [`@media screen and (min-width: ${breakpoints[3]})`]: {
        width: '100% !important',
        maxWidth: "124.8rem !important",
      },
      [`@media screen and (min-width: ${breakpoints[4]})`]: {
        maxWidth: "160rem !important",
      },
      [`@media screen and (min-width: 415px) and (max-width: 639px)`]: {
        width: "calc(100vw - 8rem)", 
      },
    },
    expandedBox: {
      position: 'absolute',
      height: '100%',
      width: [
        "calc(100vw)", 
        "calc(72rem + 1px)", 
        null,
        "100vw"
      ],
      left: [
        '0',
        'calc(50% - (72rem / 2) + 2px)',
        null,
        '0'
      ],
      [`@media screen and (min-width: ${breakpoints[4]})`]: {
        width: 'calc(6.4rem * 27 + 0.1rem)',
        left: 'calc(50vw - ((6.4rem * 27) / 2))'
      }
    },
    heroGridBox: {
      position: 'absolute',
      top: ['0', null, null, '6.4rem'],
      height: [
        'calc(2.4rem * 14)', 
        'calc(2.4rem * 18)', 
        null, 
        '44.7rem'
      ],
      width: [
        "100vw"
      ],
      left: [
        '0',
      ],
      [`@media screen and (min-width: ${breakpoints[3]})`]: {
        height: '57.6rem',
      [`@media screen and (min-width: ${breakpoints[4]})`]: {
          height: 'calc(6.4rem * 11)',
          width: 'calc(6.4rem * 27 + 0.1rem)',
          left: 'calc(50vw - ((6.4rem * 27) / 2))'
      }
    },
    },
    reducedBox: {
      width: [
        "calc(100vw - 4.8rem)", 
        "60rem", 
        null,
        '88rem'
      ],
      maxWidth: [
        '504px',
        'unset',
      ],
      mx: "auto",
      [`@media screen and (min-width: ${breakpoints[3]})`]: {
        width: '112.4rem'
      },
      [`@media screen and (min-width: ${breakpoints[4]})`]: {
        width: '147.2rem !important'
      },
      [`@media screen and (min-width: 415px) and (max-width: 638px)`]: {
        width: "calc(100vw - 8rem)", 
      },
    },
  },
  misc: {
      invertedProtocolLogo: false
  }
};
