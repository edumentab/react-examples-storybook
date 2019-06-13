module.exports = ({ config, mode }) => {
  // remove Storybooks default CSS rules and replace with functioning CSS modules setup
  config.module.rules.splice(2, 1, {
    test: /\.css$/,
    use: [
      {
        loader: "style-loader",
        options: { sourceMap: true }
      },
      {
        loader: "css-loader",
        options: {
          importLoaders: 1,
          modules: {
            mode: "local",
            localIdentName: "[path][name]__[local]--[hash:base64:5]"
          }
        }
      }
    ]
  });
  return config;
};
