import { styled } from "../stitches.config";

export const Button = styled("button", {
  border: "none",
  outline: "none",
  textDecoration: "none",
  height: "50px",
  padding: "0 25px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: "linear-gradient(90deg, $purple 42.71%, $purpleLighten 100%)",
  borderRadius: "30px",
  fontSize: "1.25rem",
  color: "$white",
  fontWeight: 600,
  cursor: "pointer",

  svg: {
    width: 24,
    height: 24,
  },

  "@bp1": {
    width: "100%",
  },

  "@bp2": {
    width: "100%",
  },
});
