import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Gilbert Mutai - Backend Engineer | Next.js | Machine Learning</title>
        <meta
          name="description"
          content="Hi, I'm Gilbert, a Backend Engineer with a proven track record of designing and implementing scalable systems and delivering seamless mobile/web experiences using Next.js and machine learning."
        />
        <meta name="theme-color" content="#05321e" />
        <meta property="og:title" content="Gilbert Mutai - Skilled Full Stack Developer/ Machine Learning Engineer" />
        <meta
          property="og:description"
          content="Hi, I'm Gilbert, a Backend Engineer with a proven track record of designing and implementing scalable systems and delivering seamless mobile/web experiences using Next.js and machine learning."
        />
        <meta property="og:image" content="/images/og-image.png" />
        <meta property="og:url" content="https://www.gilbertmutai.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gilbert Mutai - Skilled Full Stack Developer/ Machine Learning Engineer" />
        <meta
          name="twitter:description"
          content="Hi, I'm Gilbert, a Backend Engineer/ AWS Solutions Architect with a proven track record of designing and implementing scalable systems and delivering seamless mobile/web experiences using Next.js and machine learning."
        />
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
              "jobTitle": "Backend Engineer",
              "worksFor": {
                "@type": "Organization",
                "name": "Marys Tales"
              },
              "description": "Hi, I'm Gilbert, a Backend Engineer/ AWS Solutions Architect with a proven track record of designing and implementing scalable systems and delivering seamless mobile/web experiences using Next.js and machine learning."
            }
          `}
        </script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
