import Vue from 'vue';

export default async (context, inject) => {
    const runtimeConfig = context.$config && context.$config.umami || {}
    const moduleOptions = JSON.parse(`<%= serialize(options) %>`)
    const options = {...moduleOptions, ...runtimeConfig}

    await loadScript(options)
    inject('umami', window.umami)
}

function loadScript (options) {
    return new Promise((resolve, reject) => {
        const head = document.head || document.getElementsByTagName('head')[0]
        const script = document.createElement('script')

        script.async =true
        script.defer = true
        script.dataset.autoTrack = options.autoTrack
        script.dataset.doNotTrack = options.doNotTrack
        script.dataset.websiteId = options.websiteId

        if (Object.prototype.hasOwnProperty.call(options, 'domains')) {
            script.dataset['domains'] = options.domains
        }

        script.src = options.scriptUrl

        head.appendChild(script)

        script.onload = resolve
        script.onerror = reject
    })
}
