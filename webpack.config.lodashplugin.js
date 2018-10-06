/*
 * Creates the same bundles but use lodash-webpack-plugin
 */

const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");
const merge = require("webpack-merge");
const path = require("path");
const config = require("./webpack.config.js");

module.exports = merge(config, {
    output: {
        path: path.resolve(__dirname, "dist_lodash_plugin")
    },
    plugins: [new LodashModuleReplacementPlugin()]
});
