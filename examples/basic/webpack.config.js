

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
            '.foo.js'
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
                test: /\.foo\.js$/,
                include: [
                    path.resolve(__dirname, 'app')
                ],
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ],
                use: [
                    'log-loader?id=.foo.js 2',
                    'log-loader?id=.foo.js 1'
                ]
            }
        ]
    }
};
