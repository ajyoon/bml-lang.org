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

## Using the bundler

We don't currently have hosted artifacts on a CDN. To use BML in your
website, you can use the built-in webpack build pipeline. First,
download or clone [the BML repository](https://github.com/ajyoon/bml),
then run the build script from the repo.

    npm run build

This will produce a compiled and polyfilled file at `dist/bml.bundle.js`
ready to be pulled into your site and used in most browsers we know
about.

    <script src="/path/to/bml.bundle.js"></script>

Once loaded, `bml` is exposed by a single method which takes a string of
markup and returns a rendered output string.

    <script>
        document.getElementById("someTargetId").innerHTML =
            bml("some bml loaded as a js string");
    </script>

## Using through an NPM Dependency

If your website is built using NPM (as in React sites, for example),
BML can be added as a dependency in your site's `package.json`.

```json
{
  ...
  "dependencies": {
    ...
    "bml": "0.0.23"
  },
}
```

Once added, BML can be imported in your Javascript code like any other
package

```js
const bml = require('bml');
console.log(bml("some bml code"));
```
