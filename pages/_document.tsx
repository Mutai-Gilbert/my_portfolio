import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Hi, I'm Gilbert,
          Backend Engineer with a proven track record of designing and implementing scalable systems and delivering seamless 
mobile/web experiences."
        />

        <meta name="theme-color" content="#05321e" />

        <meta property="og:title" content="Skilled Full Stack Developer/ Machine Learning Engineer" />
        <meta
          property="og:description"
          content="Hi, I'm Gilbert,
          Backend Engineer with a proven track record of designing and implementing scalable systems and delivering seamless
mobile/web experiences."
        />
        <meta property="og:image" content="/images/og-image.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
