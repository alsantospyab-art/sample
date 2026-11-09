/** Static export so the site can be hosted on GitHub Pages. */
export default {
  output: "export",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  images: { unoptimized: true },
};
