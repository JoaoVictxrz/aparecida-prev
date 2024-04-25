/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["aparecidaprev.go.gov.br"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aparecidaprev.go.gov.br",
        port: "",
        pathname: "/wp-content/uploads/*/*/*", // Aceitará todas as imagens PNG com o caminho fornecido
      },
      {
        protocol: "https",
        hostname: "aparecidaprev.go.gov.br",
        port: "",
        pathname: "//wp-content/uploads/*/*/*.jpg", // Aceitará todas as imagens JPG com o caminho fornecido
      },
    ],
  },
};

export default nextConfig;
