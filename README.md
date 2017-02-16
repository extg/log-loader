# log-loader

```js
{
// ...
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
                    'log-loader?showIndex=true&id=second',
                    'log-loader?showIndex=true&id=first'
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
                    {
                        loader: 'log-loader?id=queryID',
                        options: {
                            id: 'optionID',
                            showIndex: true,
                            showSource: true,
                            showPitch: true,
                            showNextLoader: true,
                            showPrevLoader: true
                        }
                    },
                    {
                        loader: 'log-loader?id=queryID'
                    }
                ]
            }
        ]
    }
};
```
