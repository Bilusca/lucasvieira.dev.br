import { createStitches } from "@stitches/react";
import { tailwind } from "common-breakpoints";

type TailwindBreakpoints = {
  [key: string]: number;
};

const typedTailwind: TailwindBreakpoints = tailwind;

const keys = Object.keys(tailwind);

const tailwindQueries = keys.reduce((object, value, index) => {
  const minWidth = index === 0 ? 0 : typedTailwind[keys[index - 1]] + 1;
  const mediaQuery =
    index === 4
      ? `(min-width: ${minWidth}px)`
      : `(min-width: ${minWidth}px) and (max-width: ${typedTailwind[value]}px)`;

  return {
    ...object,
    [`bp${index + 1}`]: mediaQuery,
  };
}, {});

export const {
  theme,
  globalCss,
  getCssText,
  styled,
  css,
  keyframes,
  createTheme,
  config,
} = createStitches({
  prefix: "lvdev",
  theme: {
    colors: {
      black: "#262626",
      white: "#e6e6e6",
      purple: "#8A39E1",
      purpleLighten: "#B667F1",
    },
    fonts: {
      body: "Bitter, sans-serif",
      heading: "Alfa Slab One, sans-serif",
    },
    radii: {
      borderRadius: "8px",
    },
  },
  media: tailwindQueries,
  utils: {
    marginY: (value: any) => ({ marginTop: value, marginBottom: value }),
    marginX: (value: any) => ({ marginRight: value, marginLeft: value }),
    paddingY: (value: any) => ({ paddingTop: value, paddingBottom: value }),
    paddingX: (value: any) => ({ paddingRight: value, paddingLeft: value }),
  },
});

const globalStyles = globalCss({
  "*": {
    fontFamily: "$body",
    boxSizing: "border-box",
    WebkitFontSmoothing: "antialiased",
  },
  "html, body": {
    margin: "0",
    padding: "0",
    backgroundColor: "$black",
    backgroundSize: "cover",
    "@bp1": {
      fontSize: "87.5%;",
    },
  },
  img: {
    borderRadius: "$borderRadius",
    minWidth: "100%",
    maxWidth: "100%",
  },
});

globalStyles();
