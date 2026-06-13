import { Helmet } from "react-helmet-async";

const baseUrl = "https://lexora-legall.vercel.app";

const defaultImage = `${baseUrl}/og-image.webp`;

const SEO = ({ title, description, keywords, path = "/", image = defaultImage, noIndex = false, }) => {
  const url = `${baseUrl}${path}`

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="robots" content={noIndex ? "noindex,nofollow" : "index,follow"} />

      {keywords && (
        <meta name="keywords" content={keywords} />
      )}
      
      <meta name="author" content="Lexora Legal" />
      <meta property="og:site_name" content="Lexora Legal" />
      
      {/* open graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
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