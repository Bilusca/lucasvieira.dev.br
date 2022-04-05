import React from "react";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";
import { getCssText } from "../stitches.config";

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): JSX.Element {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#8A39E1" />
          <link
            href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Bitter:wght@300;600;700&display=swap"
            rel="stylesheet"
          />
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>
        <Main />
        <NextScript />
      </Html>
    );
  }
}
