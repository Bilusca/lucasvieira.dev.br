import type { GetStaticProps } from "next";
import Head from "next/head";
import HeadImage from "../../public/static/images/head-image.svg";
import { CTAButton } from "../components/CTAButton";
import { GradientText } from "../layout/GradientText";
import { Navbar } from "../components/Navbar";
import { Text } from "../layout/Text";
import { Wrapper } from "../layout/Wrapper";
import { Box } from "../layout/Box";
import { Section } from "../layout/Section";
import { Separator } from "../layout/Separator";
import { IconBox } from "../layout/IconBox";
import Image from "next/image";
import type { CSS } from "@stitches/react";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { SEO } from "../components/SEO";

type HomeProps = {
  title: string;
  description: string;
  image: string;
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: "Lucas Vieira | Desenvolvedor Full-stack",
      description:
        "Páginas de alta performance otimizadas para os principais buscadores.",
    },
  };
};

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

export default function Home({ title, description }: HomeProps) {
  return (
    <Wrapper as="main">
      <SEO title={title} description={description} />
      <Navbar />
      <Section css={sectionCss}>
        <Box
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
            Páginas de alta performance otimizadas para os principais
            buscadores.
          </Text>
          <Text>
            Diga adeus a páginas lentas e aumente as conversões da sua campanha.
          </Text>
          <CTAButton
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
            as="a"
          />
        </Box>
        <Box
          type="flex"
          css={{
            alignItems: "center",
            justifyContent: "flex-end",
            flex: 1,
            "@bp1": {
              justifyContent: "center",
            },
            "@bp2": {
              justifyContent: "center",
            },
          }}
        >
          <Image
            src="/static/images/head-image.svg"
            width={427}
            height={430}
            alt="Diga adeus a páginas lentas e aumente as conversões da sua campanha."
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAP0lEQVQImQE0AMv/AFBQUJKSkqmpqaOjowCurq7v7+/Jycm5ubkA////jIyMn5+fg4ODADAwMD09PWlpaQAAAApRGnEHblMWAAAAAElFTkSuQmCC"
          />
        </Box>
      </Section>
      <Separator />
      <Section css={{ flexDirection: "column" }}>
        <Text type="title" as="h2">
          Integração com todas as{" "}
          <GradientText
            css={{
              backgroundImage:
                "linear-gradient(90deg, #8A39E1 31.06%, #B667F1 100%)",
              fontFamily: "$heading",
            }}
          >
            ferramentas de anúncios e e-mails
          </GradientText>
        </Text>
        <Box type="flex" css={{ justifyContent: "center", width: "100%" }}>
          <IconBox>
            <Image
              width={93}
              height={115}
              src="/static/images/google-adwords-logo.png"
              alt="Google Ads"
            />
          </IconBox>
          <IconBox>
            <Image
              width={141}
              height={81}
              src="/static/images/facebook-ads.png"
              alt="Facebook Ads"
            />
          </IconBox>
        </Box>
      </Section>
      <Separator />
      <Section
        css={{
          justifyContent: "space-between",
          gap: "60px",
          "@bp1": { flexDirection: "column-reverse", alignItems: "center" },
          "@bp2": { flexDirection: "column-reverse", alignItems: "center" },
        }}
      >
        <Box css={{ flex: 1 }}>
          <Image
            src="/static/images/lucas-vieira-about.png"
            width={520}
            height={520}
            alt="Lucas Assis Vieira, desenvolvedor full-stack"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAP0lEQVQImQE0AMv/AFBQUJKSkqmpqaOjowCurq7v7+/Jycm5ubkA////jIyMn5+fg4ODADAwMD09PWlpaQAAAApRGnEHblMWAAAAAElFTkSuQmCC"
          />
        </Box>
        <Box css={{ flex: 1 }}>
          <Text
            as="h3"
            type="title"
            css={{ borderBottom: "1px solid $purple", display: "inline-block" }}
          >
            Quem sou eu
          </Text>
          <Text>
            Olá, me chamo Lucas, um goiano do pé rachado. Estou na área de
            desenvolvimento desde 2014, passando por várias tecnológias,
            ajudando na comunidade local de programadores e palestrando em
            alguns eventos. Sou desenvolvedor full-stack (ou seja, faz tudo)
            focado em performance e qualidade de produto, um das minhas maiores
            é sempre a usabilidade. No meu currículo participei do
            desenvolvimento de aplicativos mobiles, marketplaces e sistemas no
            geral. Também sou um grande fã de carros antigos, tendo 2 na minha
            garagem (ou mais ou menos isso).{" "}
          </Text>
        </Box>
      </Section>
      <Separator />
      <Contact />
      <Footer />
    </Wrapper>
  );
}
