import Whatsapp from "../../public/static/images/whatsapp.svg";
import Telegram from "../../public/static/images/telegram.svg";
import Instagram from "../../public/static/images/instagram.svg";
import { IconLink } from "../layout/IconLink";
import type { CSS } from "@stitches/react";

type CTAIconProps = {
  icon: "whatsapp" | "telegram" | "instagram";
  css?: CSS;
};

export function CTAIcon({ icon, css, ...rest }: CTAIconProps) {
  const iconSelected = {
    ["whatsapp"]: <Whatsapp />,
    ["telegram"]: <Telegram />,
    ["instagram"]: <Instagram />,
  };

  return (
    <IconLink css={css ?? {}} {...rest}>
      {iconSelected[icon]}
    </IconLink>
  );
}
