import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      new URL("https://cdn-ilaejnf.nitrocdn.com/cUfbcFhAkfCZjXvdsJwGmghGlDQAcfnr/assets/images/optimized/rev-a4ebde9/www.eversportsmanager.com/wp-content/uploads/2020/11/manager_original.png")
    ],
  },
};

export default nextConfig;
