/** @type {import('next').NextConfig} */
// const nextConfig = {}
const nextConfig = {
    webpack: function (config, context) {
        config.watchOptions = {
            poll: 1000,
            aggregateTimeout: 300,
        };
        return config;
    },
}

module.exports = nextConfig

/*
module.exports = {
    webpackDevMiddleware: (config) => {
      // Solve compiling problem via vagrant
      config.watchOptions = {
        poll: 1000,   // Check for changes every second
        aggregateTimeout: 300,   // delay before rebuilding
      };
      return config;
    }
  };
  */