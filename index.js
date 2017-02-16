

var getParams = require('./params').getParams;
var print = require('./print');

module.exports = logLoader;
module.exports.pitch = logLoaderPitch;

function logLoader(source) {
    var params = getParams(this);

    print(this);

    if (params.showSource) {
        console.log(source.grey)
    }

    return source;
}

function logLoaderPitch() {
    var params = getParams(this);

    if (params.showPitch) {
        print(this);
    }
}
