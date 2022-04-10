+++
title = "Deploying on the Web"
draft = false
weight = 10
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

{% warning() %}

`bml` should never be run on untrusted user input. It allows the
evaluation of arbitrary javascript, making it trivial to perform
cross-site-scripting attacks on sites that, for example, might support
`bml` in a user comment section. Don't do this!

{% end %}

## Using hosted and prebuilt artifacts

The easiest way to pull BML into your website is using the [jsdelivr](https://www.jsdelivr.com/) hosted artifacts. Simply add this tag to the `<head>` section of your page:

```html
<script src="https://cdn.jsdelivr.net/npm/bml@0.0.35/dist/bml.bundle.js"></script>
```

Once loaded, `bml` is exposed by a single method which takes a string of
markup and returns a rendered output string.

```html
<script>
    document.getElementById("someTargetId").innerHTML =
        bml("some bml loaded as a js string");
</script>
```

{% note() %}
While CDN-hosted libraries are convenient, many prefer to self-host
their dependencies for security, privacy, and reliability reasons. You can do this by downloading the bundle from the CDN or building it yourself, and hosting it from your website directly.
{% end %}

## Building artifacts yourself

You can also build these artifacts yourself by cloning [the BML
repository](https://github.com/ajyoon/bml) and from within it running:

```sh
npm install
npm run build
```

This will produce a compiled and polyfilled file at `dist/bml.bundle.js`
ready to be pulled into your site and used in most browsers we know
about.

```html
<script src="/path/to/bml.bundle.js"></script>
```

## Using through an NPM Dependency

If your website is built using NPM (as in React sites, for example),
BML can be added as a dependency in your site's `package.json`.

```json
{
  "dependencies": {
    "bml": "0.0.35"
  },
}
```

Once added, BML can be imported in your Javascript code like any other
package

```js
const bml = require('bml');
console.log(bml("some bml code"));
```
