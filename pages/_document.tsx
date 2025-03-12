import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Gilbert Mutai | Backend & Machine Learning Engineer</title>
        <meta name="description" content="Backend & ML. Building scalable systems." />
        <meta name="theme-color" content="#05321e" />
        <meta property="og:title" content="Gilbert Mutai | Engineer" />
        <meta property="og:description" content="Backend & ML. Building scalable systems." />
        <meta property="og:image" content="/images/og-image.png" />
        <meta property="og:url" content="https://www.gilbertmutai.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gilbert Mutai | Engineer" />
        <meta name="twitter:description" content="Backend & ML. Building scalable systems." />
        <meta name="twitter:image" content="/images/og-image.png" />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Gilbert Mutai",
              "url": "https://www.gilbertmutai.com",
              "sameAs": [
                "https://www.linkedin.com/in/gilbertmutai",
                "https://github.com/gilbertmutai",
                "https://twitter.com/gilbertmutai"
              ],
              "jobTitle": "Engineer",
              "description": "Backend & ML. Building scalable systems."
            }
          `}
        </script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}