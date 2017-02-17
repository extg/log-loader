

const path = require('path');
const utils = require('loader-utils');

module.exports = {
    getParams: getParams,
    getNextLoader: getNextLoader,
    getPrevLoader: getPrevLoader
};

/**
 * Extraction params of loader
 * @param loaderContext
 * @returns {Object}
 */
function getParams(loaderContext) {
    var query = utils.parseQuery(loaderContext.query);
    var options = utils.getLoaderConfig(loaderContext);
    var params = Object.assign(query, options);
    var filePath = path.relative(loaderContext.options.context, loaderContext.resourcePath);

    return {
        id: params.id ? `[${params.id}]` : '',
        file: `./${filePath}`,
        showSource: Boolean(params.showSource),
        showPitch: Boolean(params.showPitch),
        showPrevLoader: params.showPrevLoader,
        showNextLoader: params.showNextLoader,
        showIndex: params.showIndex,
        callback: options.callback,
        callbackPitch: options.callbackPitch,
        pad: params.pad || {}
    }
}

/**
 * Return loader name by string like /abc/node_modules/log-loader/index.js
 * @param pathToIndexJs
 * @returns {String}
 */
function getLoaderNameByPath(pathToIndexJs) {
    var loaderDir = path.dirname(pathToIndexJs);

    return loaderDir.split(path.sep).pop();
}

/**
 * Return next loader name
 * @param loaderContext
 * @returns {String}
 */
function getNextLoader(loaderContext) {
    var currentTndex = loaderContext.loaderIndex;
    var loaders = loaderContext.loaders;
    var nextLoader = loaders[currentTndex + 1] || null;

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
    var prevLoader = loaders[currentTndex - 1] || null;

    if (prevLoader) {
        return ' -> ' + getLoaderNameByPath(prevLoader.path);
    }

    return '';
}
