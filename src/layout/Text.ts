import { styled } from "../stitches.config";

export const Text = styled("p", {
  color: "$white",
  fontSize: "1rem",
  fontFamily: "$body",
  margin: "0 0 40px 0",
  fontWeight: 500,

  "@bp1": {
    marginBottom: "20px",
    fontSize: "1.25rem",
  },

  variants: {
    type: {
      title: {
        fontSize: "3rem",
        fontFamily: "$heading",
        fontWeight: 400,
        margin: "0 0 40px 0",
        "@bp1": {
          fontSize: "2.50rem",
          marginBottom: "20px",
        },
      },
      noMargin: {
        margin: 0,
      },
    },
  },
});
