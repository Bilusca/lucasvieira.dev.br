import Head from "next/head";

type SEOProps = {
  title: string;
  description: string;
};

export function SEO({ title, description }: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta content={title} property="og:title" />
      <meta content={description} name="description" />
      <meta content={description} property="og:description" />
      {/* <meta content="https://zenorocha.com" property="og:url" /> */}
      {/* <meta content={`https://zenorocha.com${image}`} property="og:image" /> */}
    </Head>
  );
}
