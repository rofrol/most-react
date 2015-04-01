var webpack = require('webpack'),
    path = require('path'),
    AnybarWebpackPlugin = require('anybar-webpack');

const ADDRESS = '0.0.0.0';
const PORT = 3000;

module.exports = {

    address: ADDRESS,
    port: PORT,
    devtool: 'source-map',
    watch: true,
    entry: [
        'webpack-dev-server/client?http://' + ADDRESS + ':' + PORT,
        'webpack/hot/only-dev-server',
        path.join(__dirname, '/src/state-mixin-example.jsx')
    ],
    module: {
        loaders: [
            { test: /\.(jsx|js|es6)$/, exclude: /node_modules/, loaders: ['react-hot', 'babel-loader?optional=runtime'] }
        ]
    },
    output: {
        path: path.join(__dirname, '/'),
        filename: 'app.js',
        publicPath: '/examples/'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.es6']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new AnybarWebpackPlugin()
    ]
};
