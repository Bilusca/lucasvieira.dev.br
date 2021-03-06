import Image from "next/image";

import { styled } from "../stitches.config";
import { Text } from "../layout/Text";

import Logo from "../../public/static/images/logo.png";

export function Navbar() {
  return (
    <Header>
      <HeaderBox>
        <Image src={Logo} alt="Lucas Vieira | Fullstack developer" priority />
        <Text
          as="span"
          type="noMargin"
          css={{
            display: "inline-block",
            marginLeft: "10px",
            marginBottom: 0,
          }}
        >
          Olá, eu sou o Lucas Vieira
        </Text>
      </HeaderBox>
      <BottomBorder />
    </Header>
  );
}

const Header = styled("header", {
  height: "64px",
  width: "100%",
  position: "fixed",
  top: 0,
  zIndex: 100,
  background: "rgba(38, 38, 38, 0.2)",
  backdropFilter: "blur(30px)",
});

const HeaderBox = styled("div", {
  width: "70%",
  margin: "0 auto",
  padding: "9px 0",
  display: "flex",
  alignItems: "center",
  "@bp1": {
    width: "90%",
  },
});

const BottomBorder = styled("div", {
  width: "100%",
  height: "1px",
  background:
    "linear-gradient(90deg, #8A39E1 0%, rgba(182, 103, 241, 0.1) 100%)",
});
