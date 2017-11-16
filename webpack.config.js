const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/web/spicy_meme.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
		loader: 'ts-loader',
		options: {
			configFile: 'tsconfig.web.json'
		}
	}
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['artifacts']),
    new HtmlWebpackPlugin({
      title: 'hello world',
      template: 'src/web/index.html'
    })
  ],
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
	path: path.resolve(__dirname, "/artifacts/web"),
    filename: 'bundle.js'
  },
  watch: true,
  devtool: "source-map"
};