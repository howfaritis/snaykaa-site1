import Head from "next/head";
import seo from "../data/seo.json";

export default function SeoHead({
  title,
  description,
  keywords = [],
  image = "/blog-glow.jpg",
  url = ""
}) {
  const fullTitle = title ? `${title} · ${seo.siteName}` : `${seo.siteName} · ${seo.tagline}`;
  const desc = description || seo.description;
  const kw = [...(seo.keywords || []), ...keywords].join(", ");
  const canonical = url || seo.siteUrl;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta name="keywords" content={kw} />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:site_name" content={seo.siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@the_snaykaa" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}


