import { Helmet } from 'react-helmet-async';
import { getImagePath } from '../utils/paths';

/**
 * MetaTags component for managing document head metadata
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Page title
 * @param {string} props.description - Page description for SEO
 * @param {string} props.keywords - Keywords for SEO
 * @param {string} props.ogImage - Open Graph image URL
 * @param {string} props.canonical - Canonical URL
 */
const MetaTags = ({ 
  title = 'FLID - Fundacja Ludzie-Innowacje-Design',
  description = 'FLID to fundacja zajmująca się innowacyjnymi projektami z zakresu designu, technologii i usług dla społeczeństwa.',
  keywords = 'design thinking, innowacje, projektowanie usług, bielsko-biała, design',
  ogImage = getImagePath('flid-social-share.svg'),
  canonical = ''
}) => {
  const siteUrl = 'https://flid.pl';
  const fullUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const fullTitle = title !== 'FLID - Fundacja Ludzie-Innowacje-Design' 
    ? `${title} | FLID` 
    : title;
  
  return (
    <Helmet>
      {/* Basic metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
    </Helmet>
  );
};

export default MetaTags;
