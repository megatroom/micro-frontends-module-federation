module.exports = {
  reactStrictMode: true,

  webpack: (config, options) => {
    const { ModuleFederationPlugin } = options.webpack.container;

    config.plugins.push(
      new ModuleFederationPlugin({
        name: "host",
        remotes: {
          mf_webpack_01: "mf_webpack_01@http://localhost:3001/remoteEntry.js",
        },
      })
    );

    return config;
  },
};
