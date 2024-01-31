export default async function sitemap() {
  const baseUrl = "https://sreeragofficial.vercel.app/";
  return [{ url: baseUrl, lastModified: new Date() }];
}
