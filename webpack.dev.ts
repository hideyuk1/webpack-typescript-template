import path from "path";
import webpack from "webpack";
import { Configuration } from "webpack-dev-server";
import { merge } from "webpack-merge";
import common from "./webpack.common";

const webpackConfig: webpack.Configuration & Configuration = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        compress: true,
        hot: "only", //Hot module replacement
        open: "chrome", //open in chrome
        devMiddleware: {
            index: "index.html",
            writeToDisk: true,
        },
        static: {
            directory: path.join(__dirname, "dist"),
        }
    },
});

export default webpackConfig;