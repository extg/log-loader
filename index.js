

var getParams = require('./params').getParams;
var print = require('./print');

module.exports = logLoader;
module.exports.pitch = logLoaderPitch;

function logLoader(source) {
    var params = getParams(this);
    var callback = params.callback;

    print(this);

    if (params.showSource) {
        console.log(source.grey)
    }

    if (typeof callback === 'function') {
        return callback.call(this, source);
    }

    return source;
}

function logLoaderPitch() {
    var args = [].slice.call(arguments, 0);
    var params = getParams(this);
    var callback = params.callbackPitch;

    if (params.showPitch) {
        print(this);
    }

    if (typeof callback === 'function') {
        callback.apply(this, args);
    }
}
