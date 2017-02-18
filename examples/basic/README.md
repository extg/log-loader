# Proto

## Getting Started

```
npm install
npm run build
npm run server
```

for dev
```
npm run watch
```


## loaders order

```bash
 ./app/index.js                       [.js]           -> babel-loader [pitch]
 ./app/index.js                       [.js]           -> babel-loader
 ./app/documentWrite.js               [.js]           -> babel-loader [pitch]
 ./app/foo/foo.test.js                [.js]           -> babel-loader [pitch]
 ./app/foo/index.js                   [.js]           -> babel-loader [pitch]
 ./app/documentWrite.js               [.js]           -> babel-loader
 ./app/foo/foo.test.js                [.test.js 1]
 ./app/foo/foo.test.js                [.test.js 2]
 ./app/foo/foo.test.js                [.js]           -> babel-loader
 ./app/foo/index.js                   [.js]           -> babel-loader
 ```
