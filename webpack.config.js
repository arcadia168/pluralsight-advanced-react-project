const path = require('path');

const config = {
    entry: ['babel-polyfill', './lib/components/Index.js'],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            options: {
                presets: ['es2015', 'react', 'env', 'stage-2']
            },
            exclude: [
                path.resolve(__dirname, '/node_modules/')
            ]
        }]
    }
};

module.exports = config;