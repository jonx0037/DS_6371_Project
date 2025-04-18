import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  breadcrumbs = [],  // New breadcrumbs prop
  article = false 
}) => {
  const siteTitle = "House Prices Analysis | SMU DS 6371 Project";
  const defaultDescription = "A comprehensive analysis of housing prices in Ames, Iowa using advanced regression techniques - created as part of the DS 6371 Statistical Analysis course at Southern Methodist University.";
  const defaultKeywords = "data science, housing prices, statistical analysis, regression, Ames Iowa, SMU, house price prediction, Kaggle competition, housing market analysis";
  const defaultImage = `${process.env.PUBLIC_URL}/assets/img/project-preview.jpg`;
  const siteUrl = "https://jonx0037.github.io/DS_6371_Project";
  
  const seo = {
    title: title ? `${title} | ${siteTitle}` : siteTitle,
    description: description || defaultDescription,
    keywords: keywords || defaultKeywords,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${url || ''}`,
    article: article
  };

  // Generate BreadcrumbList schema if breadcrumbs are provided
  const breadcrumbListSchema = breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${siteUrl}${item.url}`
    }))
  } : null;

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      
      {/* OpenGraph tags for social media */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content={seo.article ? 'article' : 'website'} />
      
      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={seo.url} />
      
      {/* BreadcrumbList structured data */}
      {breadcrumbListSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbListSchema)}
        </script>
      )}
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ),
  article: PropTypes.bool,
};

export default SEO;