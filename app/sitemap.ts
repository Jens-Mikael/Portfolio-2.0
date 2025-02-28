export default async function sitemap() {
  return [
    {
      url: "https://stjernberg.dev",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://stjernberg.dev/CV.pdf",
      lastModified: new Date(),
      priority: 0.9,
    },
  ];
}
