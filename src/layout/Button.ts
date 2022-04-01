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
  transition: "filter 0.2s",
  "&:hover": {
    filter: "drop-shadow(1px 2px 5px rgba(230, 230, 230, 0.3)) brightness(0.6)",
  },

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
