import { styled } from "../stitches.config";

export const Box = styled("div", {
  variants: {
    type: {
      flex: {
        display: "flex",
      },
      flexColumn: {
        display: "flex",
        flexDirection: "column",
      },
    },
  },
});
