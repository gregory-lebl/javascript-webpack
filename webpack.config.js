/* eslint-disable */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/index.js',
    output: { filename: 'main.js', path: path.resolve(__dirname, 'public') },
    devServer: {
        watchFiles: ['src/*.html'],
        hot: true,
    },
    module: {
        rules: [
            {
                test: [/.js$|.ts$/],
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/typescript'],
                    },
                },
            },
            {
                test: [/.css$|.scss$/],
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/images',
                        },
                    },
                ],
            },
        ],
    },
    resolve: { extensions: ['.js', '.ts'] },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack is awesome!',
            template: './src/index.html',
            inject: true,
            minify: { removeComments: true, collapseWhitespace: false },
        }),
        new MiniCssExtractPlugin({ filename: 'style.css' }),
    ],
}
