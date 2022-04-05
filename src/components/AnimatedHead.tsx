import Image from "next/image";
import type { CSS } from "@stitches/react";
import dynamic from "next/dynamic";

import { Text } from "../layout/Text";
import { Box } from "../layout/Box";
import { Section } from "../layout/Section";
import { CTAButton } from "./CTAButton";
import { motion as m } from "framer-motion";

const HeadImage = dynamic(
  () => import("../../public/static/images/head-image.svg")
);

export function AnimatedHead() {
  const sectionCss: CSS = {
    marginTop: "165px",
    justifyContent: "space-between",
    gap: "50px",
    "@bp1": {
      marginTop: 165 / 1.5,
      flexDirection: "column",
    },
    "@bp2": {
      marginTop: 165 / 1.5,
      flexDirection: "column",
    },
  };

  const list = {
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.8 },
    },
    hidden: { opacity: 0 },
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: (custom: number) => ({ opacity: 0, x: custom }),
  };

  return (
    <Section
      as={m.section}
      initial="hidden"
      animate="visible"
      variants={list}
      css={sectionCss}
    >
      <Box
        as={m.div}
        custom={0}
        variants={item}
        type="flexColumn"
        css={{
          flex: 1,
          "@bp1": {
            marginBottom: "40px",
          },
          "@bp2": {
            marginBottom: "40px",
          },
        }}
      >
        <Text as="h1" type="title">
          Páginas de alta performance otimizadas para os principais buscadores.
        </Text>
        <Text>
          Diga adeus a páginas lentas e aumente as conversões da sua campanha.
        </Text>
        <CTAButton
          link="https://api.whatsapp.com/send?phone=5562981602934&text=Olá,%20queria%20o%20orçamento%20de%20uma%20landing%20page/sistema"
          target="_blank"
          animated
          text="Me chame no WhatsApp"
          icon="whatsapp"
          css={{
            "@bp3": {
              width: "330px",
            },
            "@bp4": {
              width: "330px",
            },
            "@bp5": {
              width: "330px",
            },
          }}
          as={m.a}
        />
      </Box>
      <Box
        as={m.div}
        custom={-100}
        variants={item}
        type="flex"
        css={{
          alignItems: "center",
          justifyContent: "flex-end",
          flex: 1,
          svg: {
            maxWidth: 427,
            maxHeight: 430,
          },
          "@bp1": {
            justifyContent: "center",
          },
          "@bp2": {
            justifyContent: "center",
          },
        }}
      >
        <HeadImage />
      </Box>
    </Section>
  );
}
