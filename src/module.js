import path from 'path';

export default function SimpleModule(moduleOptions) {
    const resolvedOptions = {}

    // mandatory options
    if (moduleOptions.websiteId === undefined) {
        throw new Error('The Umami requires websiteId to be set');
    } else {
        resolvedOptions.websiteId = moduleOptions.websiteId
    }

    if (moduleOptions.scriptUrl === undefined) {
        throw new Error('The Umami requires scriptUrl to be set');
    } else {
        resolvedOptions.scriptUrl = moduleOptions.scriptUrl
    }

    // booleans
    resolvedOptions.autoTrack = moduleOptions.autoTrack === undefined ? true : (moduleOptions.autoTrack || false)
    resolvedOptions.doNotTrack = moduleOptions.doNotTrack || false
    resolvedOptions.cache = moduleOptions.cache || false

    // optional value
    if (moduleOptions.domains !== undefined) {
        resolvedOptions.domains = moduleOptions.domains
    }

    this.addPlugin({
        src: path.resolve(__dirname, 'plugin.js'),
        options: resolvedOptions,
    });
}

module.exports.meta = require('../package.json');
