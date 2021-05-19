
# Nuxt Umami Module

Wrapper around the [Umami Analytics](https://umami.is/) package, exposed to your app as `this.$umami`




## Installation

Install with npm

```bash 
  npm install nuxt-umami-module

```

Or with yarn

```bash 
  yarn add nuxt-umami-module

```

### Configuration

Add the module to `nuxt.config.js`:

```javascript
{
  modules: [
    ['nuxt-umami-module', { 
        autoTrack: true,
        doNotTrack: false,
        cache: false,
        domains: 'mywebsite.com,mywebsite2.com',
        websiteId: 'your-website-id',
        scriptUrl: 'https://path.to.umami.js',
    }],
  ]
}
```

Only `websiteId` and `scriptUrl` are mandatory. See the [Umami docs](https://umami.is/docs/tracker-config) for more explanation of these options.

## Usage

### In a component

```javascript

// Sends an event with an event type of custom.
this.$umami('Signup button click')

// track a custom event with an event type of "signup"
// this.$umami.trackEvent(event_value, event_type, [url], [website_id])
this.$umami.trackEvent('Signup button click', 'signup')

// track a page view
this.$umami.trackView(url, [referrer], [website_id])

```

### in asyncData, or middleware etc, you can use $umami from Nuxt context, for example:
```javascript
export default ({ route, $umami }) => {
    $umami.trackView(route.fullPath)
}
```

All functions defined [in the Umami docs](https://umami.is/docs/tracker-functions) are available,
so read them for more info
