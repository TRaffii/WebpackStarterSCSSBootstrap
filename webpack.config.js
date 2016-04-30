const path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry:
    [
        'bootstrap-loader/extractStyles',
        './js/app',
    ],
    output: {
        path: __dirname +  '/public',
        filename: 'public/bundle.js'
    },
    module: {
        loaders: [
             {
                test: /\.scss$/,
                loader:  ExtractTextPlugin.extract(
                    'style', // backup loader when not building .css file
                    'css!sass' // loaders to preprocess CSS
                )
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url?limit=10000"
            },
            {
                test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
                loader: 'file?name=public/fonts/[name].[ext]'
            },
            { test: /\.png$/, loader: "url-loader?limit=100000" },
            { test: /\.jpg$/, loader: "file-loader" },
            // Bootstrap 3
            { test:/bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/, loader: 'imports?jQuery=jquery' },
        ]
    },
    plugins: [
        new ExtractTextPlugin("public/styles.css", {
            allChunks: true
        })
    ]
};
