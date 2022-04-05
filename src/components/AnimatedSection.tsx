import { ReactNode, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { CSS } from "@stitches/react";
import { useAnimation, motion as m } from "framer-motion";
import { Section } from "../layout/Section";

type AnimatedProps = {
  children: ReactNode;
  css?: CSS;
};

export function AnimatedSection({ children, css }: AnimatedProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 100, transition: { duration: 0.8 } },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <Section
      as={m.section}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      css={css}
    >
      {children}
    </Section>
  );
}
