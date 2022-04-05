import type { GetStaticProps } from "next";
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
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { SEO } from "../components/SEO";
import { AnimatedHead } from "../components/AnimatedHead";
import { AnimatedSection } from "../components/AnimatedSection";

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

export default function Home({ title, description }: HomeProps) {
  return (
    <Wrapper as="main">
      <SEO title={title} description={description} />
      <Navbar />
      <AnimatedHead />
      <Separator />
      <AnimatedSection css={{ flexDirection: "column" }}>
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
      </AnimatedSection>
      <Separator />
      <AnimatedSection
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
            Olá, me chamo Lucas, goiano do pé rachado. Estou na área de
            desenvolvimento desde 2014, passando por várias tecnológias,
            ajudando na comunidade local de programadores e palestrando em
            alguns eventos. Sou desenvolvedor full-stack (ou seja, faz tudo)
            focado em performance, qualidade de produto e usabilidade. Na minha
            carreira participei do desenvolvimento de aplicativos mobiles,
            marketplaces e sistemas no geral. Também sou um grande fã de carros
            antigos, tendo 2 na minha garagem (ou mais ou menos isso).{" "}
          </Text>
        </Box>
      </AnimatedSection>
      <Separator />
      <Contact />
      <Footer />
    </Wrapper>
  );
}
