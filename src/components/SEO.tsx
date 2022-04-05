import Head from "next/head";

type SEOProps = {
  title: string;
  description: string;
};

export function SEO({ title, description }: SEOProps) {
  return (
    <Head>
      <title>{title}</title>

      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
      ></meta>

      <meta content={description} name="description" />
      <meta property="author" content="Lucas Vieira (Bilusca)" />
      <meta
        property="keywords"
        content="frontend, backend, nextjs, react, fullstack"
      />
      <meta
        property="robots"
        content="frontend, backend, nextjs, react, fullstack"
      />
      <meta property="canonical" content="https://lucasvieira.dev.br" />

      <meta content={title} property="og:title" />
      <meta property="og:type" content="website" />
      <meta content={description} property="og:description" />
      <meta content="https://lucasvieira.dev.br" property="og:url" />
      <meta
        content={`https://lucasvieira.dev.br/static/images/lucas-vieira-about.png`}
        property="og:image"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="lucasvieira.dev.br" />
      <meta property="twitter:url" content="https://lucasvieira.dev.br" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content={`https://lucasvieira.dev.br/static/images/lucas-vieira-about.png`}
      />
    </Head>
  );
}
