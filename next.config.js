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
        source: "/discord",
        destination: "https://discord.com/users/957437570546012240",
        permanent: false,
      },
      {
        source: "/github",
        destination: "https://github.com/AndehUK",
        permanent: false,
      },
      {
        source: "/twitch",
        destination: "https://www.twitch.tv/andehx_",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
