/*
 * Standard webpack configuration using babel loader
 */

const CompressionPlugin = require("compression-webpack-plugin");
const _ = require("lodash");
const path = require("path");
const webpack = require("webpack");

const files = [
    "lodashflatten",
    "lodashflatten_map",
    "lodashmap_func",
    "lodashmap_string",
    "nativemap",
    "nativemap_with_lodash"
];

module.exports = {
    mode: "production",
    entry: _.mapValues(_.keyBy(files), file =>
        path.resolve(__dirname, `src/${file}.js`)
    ),
    output: {
        filename: "[name].min.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: "babel-loader"
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: "source-map",
    plugins: [
        new CompressionPlugin({
            test: /\.js(\?.*)?$/i
        })
    ]
};
