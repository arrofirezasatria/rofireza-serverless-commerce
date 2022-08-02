/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig

const STUDIO_REWRITE = {
  source: "/sanity-cms/:path*",
  destination:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3333/sanity-cms/:path*"
      : "/sanity-cms/index.html",
};

module.exports = {
  rewrites: () => [STUDIO_REWRITE],
};
