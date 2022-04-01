import type { CSS } from "@stitches/react";
import { Box } from "../layout/Box";
import { Text } from "../layout/Text";
import { CTAIcon } from "./CTAIcon";

const FooterCss: CSS = {
  height: "60px",
  width: "100%",
  bottom: 0,
  zIndex: 100,
  background: "rgba(38, 38, 38, 0.2)",
  backdropFilter: "blur(30px)",
  alignItems: "center",

  "&::before": {
    content: "",
    width: "100%",
    height: "1px",
    background:
      "linear-gradient(90deg, #8A39E1 0%, rgba(182, 103, 241, 0.1) 100%)",
  },

  "@bp1": { height: "120px" },
  "@bp2": { height: "120px" },
};

const icons = [
  { name: "whatsapp" },
  { name: "telegram" },
  { name: "instagram" },
];

export function Footer() {
  const year = new Date();

  return (
    <Box type="flexColumn" as="footer" css={FooterCss}>
      <Box
        type="flex"
        css={{
          alignItems: "center",
          width: "70%",
          flex: 1,
          justifyContent: "space-between",
          "@bp1": {
            width: "90%",
            flexDirection: "column",
            justifyContent: "initial",
            paddingY: 20,
            gap: 10,
          },
          "@bp2": {
            width: "90%",
            flexDirection: "column",
            justifyContent: "initial",
            paddingY: 20,
            gap: 10,
          },
        }}
      >
        <Text
          as="span"
          css={{
            marginY: 0,
            "@bp1": {
              textAlign: "center",
            },
            "@bp2": {
              textAlign: "center",
            },
          }}
        >
          ©️ Copyright {year.getFullYear()} | Lucas Vieira - Todos os direitos
          reservados.
        </Text>
        <Box type="flex" css={{ gap: 20 }}>
          {icons.map((icon) => (
            <CTAIcon
              key={icon.name}
              icon={icon.name}
              css={{
                "@bp1": {
                  width: 24,
                  height: 24,
                  svg: {
                    width: 24,
                    height: 24,
                  },
                },
                "@bp2": {
                  width: 24,
                  height: 24,
                  svg: {
                    width: 24,
                    height: 24,
                  },
                },
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
