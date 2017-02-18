

const path = require('path');

module.exports = {

    entry: {
        app: './app/index.js'
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public', 'dist')
    },

    resolve: {
        modules: [
            path.resolve(__dirname, 'app'),
            path.resolve(__dirname, 'node_modules')
        ],

        extensions: [
            '.js',
            '.json',
            '.test.js'
        ]

    },

    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'app')
                ],
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ],
                use: [
                    'babel-loader',
                    'log-loader?id=.js&showNextLoader=true&showPitch=1'
                ]
            },
            {
                test: /\.test\.js$/,
                include: [
                    path.resolve(__dirname, 'app')
                ],
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ],
                use: [
                    'log-loader?id=.test.js 2',
                    'log-loader?id=.test.js 1'
                ]
            }
        ]
    }
};
