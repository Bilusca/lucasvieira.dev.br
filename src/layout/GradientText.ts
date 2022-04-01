import { styled } from "../stitches.config";

export const GradientText = styled("span", {
  backgroundSize: "100%",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  MozBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  MozTextFillColor: "transparent",
  WebkitBoxDecorationBreak: "clone",
});
