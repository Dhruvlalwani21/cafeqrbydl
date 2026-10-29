import { MetadataRoute } from "next";

interface SitemapEntry {
  url: string;
  lastModified?: Date;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
 
  const staticRoutes: SitemapEntry[] = [
    { url: "https://dhruvlalwani.com/", lastModified: new Date() },
  ];

  return [
    ...staticRoutes
  ];
}