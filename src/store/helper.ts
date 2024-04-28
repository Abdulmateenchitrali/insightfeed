import { NEWS_API_KEY } from "./constant";

export const buildQuery = (obj) => {
    const url = Object.entries(obj)
      .map((pair) => pair.map(encodeURIComponent).join('='))
      .join('&');
    return url.length ? `?${url}&apiKey=${NEWS_API_KEY}` : '';
  };