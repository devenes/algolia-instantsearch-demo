const path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');

const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    // https://webpack.js.org/configuration/mode/
    mode: 'development',
    entry: "./src/js/algolia.js",
    output: {
        // filename: "[name].bundle.js",
        filename: "algolia-bundle.js",
        // path: path.resolve(__dirname, "public") Can change directory name
        path: path.resolve(__dirname, "public")
    },
    // Can change the entry name
    // entry: "./mbuzi/mbuzide.js",
    devServer: {
        contentBase: path.join(__dirname, "public"),
        port: 9002
    },
    optimization: {
        minimizer: [new UglifyJsPlugin()]
    },
    plugins: [
        // Algolia Page
        new HtmlWebpackPlugin({
            title: 'Algolia Tutorial',
            filename: 'algolia.html',
            template: './src/html-templates/algolia-template.html'
        })
    ],
    module: {
        rules: [{
                // Whenever a javascript file is found, babel should run and do not compile node_module files
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        // Supports all the browsers
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS Strings
                    { loader: 'style-loader' },

                    // Translates CSS into CommonJS
                    { loader: 'css-loader' },

                    // Compiles Sass to CSS
                    { loader: 'sass-loader' }
                ]
            },
            // Start here for the URL Loader
            {
                test: /\.(png|jpg)$/,
                use: [
                    { loader: 'url-loader' }
                ]
            },
            {
                test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9]\.png|jpg)?$/,
                use: 'url-loader?limit=10000',
            },
            {
                test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
                use: 'file-loader',
            }
        ]
    }
};