

var path = require('path');
var loader = require('loader-utils');

module.exports = getParams;

/**
 * Extraction params of loader
 * @param loaderContext
 * @returns {Object}
 */
function getParams(loaderContext) {
    var query = loader.parseQuery(loaderContext.query);
    var options = loader.getLoaderConfig(loaderContext);
    var params = Object.assign(query, options);
    var context = loaderContext.rootContext || loaderContext.context || loaderContext.options.context;
    var filePath = path.relative(context, loaderContext.resourcePath);

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
        pad: params.pad || {},
        options: options,
        query: query
    }
}
