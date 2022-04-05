import { motion } from "framer-motion";
import { Box } from "../layout/Box";
import { Text } from "../layout/Text";
import { AnimatedSection } from "./AnimatedSection";
import { CTAButton } from "./CTAButton";

const contacts = [
  {
    text: "WhatsApp",
    icon: "whatsapp",
    link: "https://api.whatsapp.com/send?phone=5562981602934&text=Olá,%20queria%20o%20orçamento%20de%20uma%20landing%20page/sistema",
    target: "_blank",
  },
  {
    text: "Telegram",
    icon: "telegram",
    link: "https://t.me/Bilusca",
    target: "_blank",
  },
  {
    text: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/bilusca/",
    target: "_blank",
  },
];

export function Contact() {
  return (
    <AnimatedSection css={{ flexDirection: "column", marginBottom: "90px" }}>
      <Box
        css={{
          width: "55%",
          "@bp1": { width: "100%" },
          "@bp2": { width: "100%" },
        }}
      >
        <Text as="h3" type="title">
          Entre em contato comigo, estou a 1 clique.
        </Text>
        <Text>
          Sem formulários, me chame diretamente no WhatsApp ou Telegram.
        </Text>
      </Box>
      <Box
        type="flex"
        css={{
          gap: "20px",
          "@bp1": {
            flexDirection: "column",
          },
          "@bp2": {
            flexDirection: "column",
          },
        }}
      >
        {contacts.map((contact) => (
          <CTAButton
            link={contact.link}
            target={contact.target}
            animated
            key={contact.icon}
            text={contact.text}
            icon={contact.icon}
            css={{
              "@bp3": {
                width: "190px",
              },
              "@bp4": {
                width: "190px",
              },
              "@bp5": {
                width: "190px",
              },
            }}
            as={motion.a}
          />
        ))}
      </Box>
    </AnimatedSection>
  );
}
