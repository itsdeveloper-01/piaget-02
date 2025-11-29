/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
      options: { mode: ["react-component", "frontmatter"] }
    });
    return cfg;
  },
  output: "export"
};

export default nextConfig;
