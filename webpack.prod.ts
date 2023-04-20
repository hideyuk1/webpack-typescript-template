import { merge } from "webpack-merge";
import common from "./webpack.common";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import webpack from "webpack";

const webpackConfig: webpack.Configuration = merge(common, {
    optimization: {
        minimizer: ['...', new CssMinimizerPlugin()]
    },
    mode: "production",
    devtool: "source-map"
});

export default webpackConfig;