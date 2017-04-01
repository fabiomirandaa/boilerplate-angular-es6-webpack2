var webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebPackPlugin = require('html-webpack-plugin'),
    path = require('path');

module.exports = {
    entry: {
        app: './app/app.js',
        vendor: './app/vendor.js'
    },

    output: {
        filename: '[name].[chunkhash].bundle.js',
        path: path.join(__dirname, 'dist')
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor']
        }),
        new HtmlWebPackPlugin({
            template: 'index.html'
        }),
        new ExtractTextPlugin('bundle.css')
    ],
    module: {
        rules: [{
                test: /\.html$/,
                include: path.resolve(__dirname, 'app/'),
                loader: `ngtemplate-loader?relativeTo=${__dirname}/app/!html-loader`,
            },
            {
                test: /\index.html$/,
                exclude: path.resolve(__dirname, 'node_modules/'),
                loader: 'html-loader?name=[name].[ext]',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: [
                        ['es2015', {
                            modules: false
                        }]
                    ]
                }
            },
            {
                test: /\.styl$/,
                loaders: ['style-loader', 'css-loader', 'stylus-loader']
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(png|jpeg|jpg|gif)$/,
                include: path.join(__dirname, 'app/images/'),
                use: 'file-loader?name=images/[name].[ext]&context=app/images/'
              },
            {
                test: /\.(woff|woff2|svg|eot|ttf)(\?.+)?$/i,
                use: 'file-loader?name=[name].[ext]'
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9000
    },
    watchOptions: {
        aggregateTimeout: 300,
        ignored: path.resolve(__dirname, 'node_modules/')
    },
    devtool: 'source-map'
};
