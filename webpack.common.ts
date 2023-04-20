import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import webpack from "webpack";

const publicPath = "/";

const webpackConfig: webpack.Configuration = {
    entry: "./src/index.ts",
    output: {
        filename: "main.bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'swc-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.html$/i,
                loader: "html-loader"
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // only enable hot in development
                            hmr: process.env.NODE_ENV === "development",
                            // if hmr does not work, this is a forceful method.
                            reloadAll: true
                        }
                    },
                    "css-loader"
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            // title: "Webpack 5 Starter",
            template: "./src/index.html",
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: false
            }
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: "[name].css",
            chunkFilename: "[id].css",
            ignoreOrder: false // Enable to remove warnings about conflicting order
        })
    ]
};

export default webpackConfig;