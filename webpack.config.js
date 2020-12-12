const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    path : path.resolve(__dirname, 'dist'),
    filename : 'bundle.js'
  },
  performance: {
    hints: false
  },
  resolve:{
    extensions : ['.js', '.jsx']
  },
  module: {
    rules: [
      { 
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.html$/i,
        use: 'html-loader',
      }
    ]
  },
  devServer: {
    publicPath: '/dist',
    compress: true,
    port: 9000
  }
};