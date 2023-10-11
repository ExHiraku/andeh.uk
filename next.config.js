/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/twitter",
        destination: "https://twitter.com/Andehx_",
        permanent: false,
      },
      {
        source: "/x",
        destination: "https://x.com/Andehx_",
        permanent: false,
      },
      {
        source: "/instagram",
        destination: "https://www.instagram.com/andehx/",
        permanent: false,
      },
      {
        source: "/github",
        destination: "https://github.com/AndehUK",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
