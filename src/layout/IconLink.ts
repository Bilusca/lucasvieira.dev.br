import { styled } from "../stitches.config";

export const IconLink = styled("a", {
  width: 20,
  height: 20,
  cursor: "pointer",
  transition: "filter 0.2s",
  "&:hover": {
    filter: "brightness(0.6)",
  },
  svg: {
    width: 20,
    height: 20,
  },
});
