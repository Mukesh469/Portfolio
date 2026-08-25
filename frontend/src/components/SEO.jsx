import { useEffect } from "react";

const ensureMetaTag = (name, attr = "name") => {
  let tag = document.head.querySelector(`meta[${attr}='${name}']`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, name);
    document.head.appendChild(tag);
  }
  return tag;
};

const SEO = ({ title, description, keywords, image }) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    if (description) {
      const descriptionTag = ensureMetaTag("description");
      descriptionTag.setAttribute("content", description);
    }

    if (keywords?.length) {
      const keywordsTag = ensureMetaTag("keywords");
      keywordsTag.setAttribute("content", keywords.join(", "));
    }

    if (image) {
      const ogImageTag = ensureMetaTag("og:image", "property");
      ogImageTag.setAttribute("content", image);
    }
  }, [title, description, keywords, image]);

  return null;
};

export default SEO;
