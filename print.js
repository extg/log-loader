

var colors = require('colors');
var h = require('./helpers');

var PAD_ID = 10;
var PAD_INDEX = 4;
var PAD_LOADER = 15;
var PAD_FILE = 35;

module.exports = function (loaderContext) {
    var params = h.getParams(loaderContext);

    // loader id
    var id = padLeftN(params.pad.id || PAD_ID, params.id);
    // relative path to the resource file (https://webpack.js.org/api/loaders/#resourcepath)
    var file = padRightN(params.pad.file || PAD_FILE, params.file);
    // index of the loader (https://webpack.js.org/api/loaders/#loaderindex)
    var index = padLeftN(params.pad.index || PAD_INDEX, `{${loaderContext.loaderIndex}}`);
    // previous loader package name
    var prevLoader = padLeftN(params.pad.loader || PAD_LOADER, h.getPrevLoader(loaderContext));
    // next loader package name
    var nextLoader = padLeftN(params.pad.loader || PAD_LOADER, h.getNextLoader(loaderContext));

    console.log(
        params.showPrevLoader ? prevLoader.cyan.bold : '',
        file.bold,
        params.showIndex ? index.green.bold : '',
        id.magenta.bold,
        params.showNextLoader ? nextLoader.cyan.bold : ''
    );
};

function padLeftN(n, str) {
    return (' '.repeat(n) + str).slice(-n);
}

function padRightN(n, str) {
    return (str + ' '.repeat(n)).slice(0, n);
}
