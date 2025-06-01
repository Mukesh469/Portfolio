// src/components/SEO.js
import { useEffect } from "react";

const SEO = ({
  title,
  description,
  keywords,
  image = `${window.location.origin}/OG_image.png`,
  siteName = "MukeshDev.com",
  noIndex = false,
}) => {
  useEffect(() => {
    // Set the document title
    if (title) {
      document.title = title;
    }

    // Helper: create/update a meta tag
    const setMeta = (attr, name, content) => {
      if (!content) return;

      let tag = document.querySelector(`meta[${attr}="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    const currentUrl = window.location.href;

    // Standard meta tags
    setMeta("name", "description", description);
    setMeta(
      "name",
      "keywords",
      Array.isArray(keywords) ? keywords.join(", ") : keywords
    );
    setMeta(
      "name",
      "robots",
      noIndex ? "noindex, nofollow" : "index, follow"
    );

    // Canonical link
    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", currentUrl);

    // Open Graph (Facebook, LinkedIn, etc.)
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", currentUrl);
    setMeta("property", "og:image", image);
    setMeta("property", "og:site_name", siteName);

    // Twitter Cards
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);
    setMeta("name", "twitter:url", currentUrl);
  }, [title, description, keywords, image, siteName, noIndex]);

  return null;
};

export default SEO;
