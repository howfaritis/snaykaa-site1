import Head from "next/head";
import seo from "../data/seo.json";

export default function SeoHead({
  title,
  description,
  keywords = [],
  image = "/blog-glow.jpg",
  url = "https://snaykaa.com/"
}) {
  const fullTitle = title ? `${title} · SNAYKAA` : `${seo.siteName} · ${seo.tagline}`;
  const desc = description || seo.description;
  const kw = [...(seo.keywords || []), ...keywords].join(", ");
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta name="keywords" content={kw} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}


