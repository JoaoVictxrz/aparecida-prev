/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aparecidaprev.go.gov.br",
        port: "",
        pathname: "/wp-content/uploads/*/*/*", // Aceitará todas as imagens PNG com o caminho fornecido
      },
    ],
  },
};

export default nextConfig;
