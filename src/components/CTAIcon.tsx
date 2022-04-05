import Whatsapp from "../../public/static/images/whatsapp.svg";
import Telegram from "../../public/static/images/telegram.svg";
import Instagram from "../../public/static/images/instagram.svg";
import { IconLink } from "../layout/IconLink";
import type { CSS } from "@stitches/react";
import { ReactElement } from "react";

type CTAIconProps = {
  icon: string;
  link: string;
  target: string;
  css?: CSS;
};

type IconSelected = {
  [key: string]: ReactElement;
};

export function CTAIcon({ icon, link, target, css, ...rest }: CTAIconProps) {
  const iconSelected: IconSelected = {
    ["whatsapp"]: <Whatsapp />,
    ["telegram"]: <Telegram />,
    ["instagram"]: <Instagram />,
  };

  return (
    <IconLink href={link} target={target} css={css ?? {}} {...rest}>
      {iconSelected[icon]}
    </IconLink>
  );
}
