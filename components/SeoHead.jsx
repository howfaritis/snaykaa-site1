import Head from "next/head";
import site from "@/data/seo.json";

export default function SeoHead({
  title = site.defaultTitle,
  description = site.defaultDescription,
  keywords = site.keywords,
  image = "/og-image.jpg",
  url = site.siteUrl
}) {
  const fullTitle = `${title} | SNAYKAA`;
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={Array.isArray(keywords) ? keywords.join(", ") : keywords} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href={url} />
    </Head>
  );
}

