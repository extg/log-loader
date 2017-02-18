

var path = require('path');
var colors = require('colors/safe');
var getParams = require('./get-params');

var PAD_ID = 15;
var PAD_INDEX = 4;
var PAD_LOADER = 15;
var PAD_FILE = 35;

var bold = colors.bold;
var grey = colors.grey;
var cyan = colors.cyan;
var green = colors.green;
var yellow = colors.yellow;
var magenta = colors.magenta;

module.exports = function (loaderContext, isPitch) {
    var params = getParams(loaderContext);

    // loader id
    var id = padRightN(params.pad.id || PAD_ID, params.id);
    // relative path to the resource file (https://webpack.js.org/api/loaders/#resourcepath)
    var file = padRightN(params.pad.file || PAD_FILE, params.file);
    // index of the loader (https://webpack.js.org/api/loaders/#loaderindex)
    var index = padLeftN(params.pad.index || PAD_INDEX, `{${loaderContext.loaderIndex}}`);
    // previous loader package name
    var prevLoader = padLeftN(params.pad.loader || PAD_LOADER, getPrevLoader(loaderContext));
    // next loader package name
    var nextLoader = padLeftN(params.pad.loader || PAD_LOADER, getNextLoader(loaderContext));

    console.log(
        params.showPrevLoader ? cyan(bold(prevLoader)) : '',
        isPitch ? grey(file) : bold(file),
        params.showIndex ? green(bold(index)) : '',
        magenta(bold(id)),
        params.showNextLoader ? cyan(bold(nextLoader)) : '',
        isPitch ? yellow('[pitch]') : ''
    );
};

function padLeftN(n, str) {
    return (' '.repeat(n) + str).slice(-n);
}

function padRightN(n, str) {
    return (str + ' '.repeat(n)).slice(0, n);
}

/**
 * Return loader name by string like /abc/node_modules/log-loader/index.js
 * @param pathToIndexJs
 * @returns {String}
 */
function getLoaderNameByPath(pathToIndexJs) {
    var loaderDir = path.relative('node_modules', pathToIndexJs);

    return loaderDir.split(path.sep).shift();
}

/**
 * Return next loader name
 * @param loaderContext
 * @returns {String}
 */
function getNextLoader(loaderContext) {
    var currentTndex = loaderContext.loaderIndex;
    var loaders = loaderContext.loaders;
    var nextLoader = loaders[currentTndex - 1] || null;

    if (nextLoader) {
        return ' -> ' + getLoaderNameByPath(nextLoader.path);
    }

    return '';
}

/**
 * Return previous loader name
 * @param loaderContext
 * @returns {String}
 */
function getPrevLoader(loaderContext) {
    var currentTndex = loaderContext.loaderIndex;
    var loaders = loaderContext.loaders;
    var prevLoader = loaders[currentTndex + 1] || null;

    if (prevLoader) {
        return getLoaderNameByPath(prevLoader.path)+ ' -> ';
    }

    return '';
}
