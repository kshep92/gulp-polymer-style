var through = require('through2');
var gutil = require('gulp-util');

var PluginError = gutil.PluginError;

var template = 
"<dom-module id=\":moduleName\">\n"+
"    <template>\n"+
"       <style>\n"+
"           :content\n"+
"       </style>\n"+
"     </template>\n"+
"</dom-module>";

function getModuleName(path) {
    var normalizedPath = path.replace(/\\/g, '/');      
    var index = normalizedPath.lastIndexOf('/');
    var fileName = normalizedPath.substring(index+1);
    return fileName.split('.')[0].replace(/[_\s]/g, '-')
}

module.exports = function() {

    return through.obj(function(file, encoding, callback) {
        if(file.isNull()) {
            return callback(null, file);
        }

        if(file.isStream()) {
            return callback(new PluginError('gulp-polymer-style', 'Streams not supported yet.'));
        }

        var contents = file.contents.toString(encoding);

        var moduleName = getModuleName(file.path);

        var output = template.replace(':moduleName', moduleName)
            .replace(':content', contents);
        
        file.contents = new Buffer(output);

        file.path = gutil.replaceExtension(file.path, '.html');

        callback(null, file);

    });
}