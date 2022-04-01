import { styled } from "../stitches.config";

export const IconBox = styled("div", {
  width: "150px",
  height: "150px",
  background:
    "linear-gradient(179.97deg, rgba(230, 230, 230, 0.95) 74.99%, rgba(255, 255, 255, 0.19) 99.97%)",
  borderRadius: 10,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginX: 20,

  "@bp1": {
    marginX: 10,
  },

  "@bp2": {
    marginX: 10,
  },
});
