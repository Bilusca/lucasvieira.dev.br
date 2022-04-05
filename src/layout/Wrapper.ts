import { styled } from "../stitches.config";

export const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  minHeight: "100vh",
  width: "100%",
  position: "relative",
  zIndex: 0,

  "img:first-child": {
    zIndex: -10,
  },
});
