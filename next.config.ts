import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos", // Allows all subdomains of example.com
        pathname: "/seed/**", // Only allows paths starting with /images/
      },
    ],
  },
};

export default nextConfig;
