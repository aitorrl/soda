var path = require('path');
var fs = require('fs');


var twigFunctions = require('./twigFunctions');
var twigFilters = require('./twigFilters');


var getComponentJSON = function(file){
    var componentData = {};
    var jsonFile = file.replace('.twig', '.json');
    if(fs.existsSync(jsonFile)) {
      componentData = JSON.parse(fs.readFileSync(jsonFile));
    };
    return componentData;
  }
var twigConfigs = function(options) { 
    return {
        base:path.join(options.twigPages.baseSrc),
        /* extend: function(Twig){
            twigMarkdown(Twig);
        },*/
        filters: twigFilters,
        functions: twigFunctions,
        namespaces: {
            'base': path.join(process.cwd(), options.twigPages.baseSrc, '/00-base'),
            'components': path.join(process.cwd(), options.twigPages.baseSrc , '/01-components'),
            'component-blocks': path.join(process.cwd(), options.twigPages.baseSrc , '/02-component-blocks'),
            'pages': path.join(process.cwd(), options.twigPages.baseSrc , '/03-pages')
        },
        useFileContents: true
    }
}
module.exports = function (options) {
    return {
        getComponentJSON: getComponentJSON,
        twigConfigs:twigConfigs(options)
    }
};
