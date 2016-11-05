var ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebPackPlugin = require('html-webpack-plugin'),
    ngAnnotatePlugin = require('ng-annotate-webpack-plugin'),
    path = require('path');

module.exports = {
    entry: './app/app.js',
    output: {
        filename: 'bundle.js',
        path: 'dist'
    },
    module: {
        loaders: [{
            test: /\.styl$/,
            loader: ExtractTextPlugin.extract('css-loader!stylus-loader'),
            exclude: /node_modules/
        },
        {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style', 'css-loader')
        },
        {
            test: /\.js$/,
            exclude: path.resolve(__dirname, 'node_modules/'),
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }, {
            test: /\.html$/,
            include: path.join(__dirname, 'app/'),
            loader: 'file?name=[name].[ext]&context=app/'
        },
        {
            test: /\.(png|jpeg|jpg|gif)$/,
            include: path.join(__dirname, 'app/assets/images/'),
            loader: 'file?name=[name].[ext]&context=app/assets/images/'
        },
        {
            test: /\.(woff|woff2|svg|eot|ttf)(\?.+)?$/i,
            loader: 'file?name=[name].[ext]'
        }]
    },
    plugins: [
        new ExtractTextPlugin('bundle.css'),
        new HtmlWebPackPlugin({ template: 'index.html' }),
        new ngAnnotatePlugin({
            add: true
        })
    ]
};
