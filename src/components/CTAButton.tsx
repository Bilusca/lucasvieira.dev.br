import Whatsapp from "../../public/static/images/whatsapp.svg";
import Telegram from "../../public/static/images/telegram.svg";
import Instagram from "../../public/static/images/instagram.svg";
import { Button } from "../layout/Button";
import type { CSS } from "@stitches/react";
import { ReactElement } from "react";

type CTAButtonProps = {
  text: string;
  icon: string;
  css?: CSS;
  as?: any;
};

type IconSelected = {
  [key: string]: ReactElement;
};

export function CTAButton({ text, icon, css, ...rest }: CTAButtonProps) {
  const iconSelected: IconSelected = {
    ["whatsapp"]: <Whatsapp />,
    ["telegram"]: <Telegram />,
    ["instagram"]: <Instagram />,
  };

  return (
    <Button css={css ?? {}} {...rest}>
      {text} {iconSelected[icon]}
    </Button>
  );
}
