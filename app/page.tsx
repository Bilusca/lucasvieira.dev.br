import { Suspense } from "react";
import { checkEnvUrl } from "../lib/checkEnvUrl";

import { About } from "./components/About";
import { AnimatedSection } from "./components/AnimatedSection";
import { BlogSection } from "./components/BlogSection";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";

async function getData() {
  const url = checkEnvUrl()
  const res = await fetch(`${url}api/blog/get`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json()
}


export default async function Page() {
  const data = await getData();

  return (
    <>
      <Hero />
      <About />
      <AnimatedSection />
      <BlogSection />
      <Footer />
    </>
  )
}