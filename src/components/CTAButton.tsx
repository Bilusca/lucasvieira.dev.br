import Whatsapp from "../../public/static/images/whatsapp.svg";
import Telegram from "../../public/static/images/telegram.svg";
import Instagram from "../../public/static/images/instagram.svg";
import { Button } from "../layout/Button";
import type { CSS } from "@stitches/react";
import { ReactElement } from "react";

type CTAButtonProps = {
  text: string;
  icon: string;
  link: string;
  target: string;
  animated?: boolean;
  css?: CSS;
  as?: any;
};

type IconSelected = {
  [key: string]: ReactElement;
};

export function CTAButton({
  text,
  icon,
  link,
  target,
  animated = false,
  css,
  ...rest
}: CTAButtonProps) {
  const iconSelected: IconSelected = {
    ["whatsapp"]: <Whatsapp />,
    ["telegram"]: <Telegram />,
    ["instagram"]: <Instagram />,
  };

  const whileHover = {
    scale: 1.1,
    filter: "contrast(150%)",
    transition: {
      duration: 0.3,
    },
  };

  const whileTap = {
    scale: 0.9,
    filter: "contrast(90%)",
  };

  return (
    <>
      {animated ? (
        //@ts-ignore
        <Button
          whileHover={whileHover}
          whileTap={whileTap}
          href={link}
          target={target}
          css={css ?? {}}
          {...rest}
        >
          {text} {iconSelected[icon]}
        </Button>
      ) : (
        <Button href={link} target={target} css={css ?? {}} {...rest}>
          {text} {iconSelected[icon]}
        </Button>
      )}
    </>
  );
}
