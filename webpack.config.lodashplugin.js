const CompressionPlugin = require("compression-webpack-plugin");
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");
var path = require("path");
var webpack = require("webpack");

module.exports = {
    mode: "development",
    entry: {
        lodashmap: path.resolve(__dirname, "src/lodashmap.js"),
        lodashmapflatten: path.resolve(__dirname, "src/lodashmapflatten.js"),
        lodashmapiteratee: path.resolve(__dirname, "src/lodashmapiteratee.js"),
        lodashflatten: path.resolve(__dirname, "src/lodashflatten.js"),
        nativemap: path.resolve(__dirname, "src/nativemap.js"),
        nativemapimportinglodash: path.resolve(
            __dirname,
            "src/nativemapimportinglodash.js"
        )
    },
    output: {
        filename: "[name].min.js",
        path: path.resolve(__dirname, "dist_lodash_plugin")
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
                options: {
                    plugins: ["lodash"],
                    presets: [["env", { modules: false, targets: { node: 8 } }]]
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: "source-map",
    plugins: [
        new LodashModuleReplacementPlugin(),
        new CompressionPlugin({
            test: /\.js(\?.*)?$/i
        })
    ]
};
