const nodeExternals = require('webpack-node-externals');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
     mode: 'production',
     plugins: [
       new CleanWebpackPlugin(['dist']),
     externals: [nodeExternals()],
     //This is where webpack will compile from
     entry: {
         'index': './src/index.js'
     },
     output: {
         path: path.join(__dirname, 'dist'),
         //name will be the entry filename
         //in this example it 'index'
         filename: '[name].bundle.js',
         libraryTarget: 'commonjs2',
     },
     module: {
         rules: [
             {
             test: /\.js$/,
             //don't want webpack to compile the node folders
             exclude: /node_modules/,
             use: 'babel-loader'
            }
        ]
     }
}
