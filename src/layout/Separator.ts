import { styled } from "../stitches.config";

export const Separator = styled("div", {
  marginY: "90px",
  height: "1px",
  background:
    " linear-gradient(90deg, #8A39E1 0%, rgba(182, 103, 241, 0.1) 100%)",
  width: "70%",

  "@bp1": {
    width: "90%",
    marginY: "50px",
  },

  "@bp2": {
    width: "90%",
    marginY: "50px",
  },
});
