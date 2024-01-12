module.exports = {
    configureWebpack: (config) => {
      config.module.rules.push({
        test: /\.onnx$/,
        use: 'file-loader',
      });
    },
  };
  