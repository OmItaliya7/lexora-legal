import { Helmet } from "react-helmet-async";

const SITE_URL = "https://your-domain.com";

const SEO = ({
  title,
  description,
  keywords,
  path = "",
  image = "/og-image.jpg",
  noIndex = false,
}) => {
  const canonicalUrl = `${SITE_URL}${path}`;

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>

      <meta name="description" content={description} />

      {keywords && (
        <meta name="keywords" content={keywords} />
      )}
      
      <meta name="author" content="Dotch Law Firm" />
      <meta property="og:site_name" content="Dotch Law Firm" />

      {/* Robots */}
      <meta name="robots" content={noIndex ? "noindex,nofollow" : "index,follow"} />

      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;