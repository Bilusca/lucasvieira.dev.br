import { Box } from "../layout/Box";
import { Section } from "../layout/Section";
import { Text } from "../layout/Text";
import { CTAButton } from "./CTAButton";

const contacts = [
  {
    text: "WhatsApp",
    icon: "whatsapp",
  },
  {
    text: "Telegram",
    icon: "telegram",
  },
  {
    text: "Instagram",
    icon: "instagram",
  },
];

export function Contact() {
  return (
    <Section css={{ flexDirection: "column", marginBottom: "90px" }}>
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
            as="a"
          />
        ))}
      </Box>
    </Section>
  );
}
