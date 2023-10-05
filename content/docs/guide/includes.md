+++
title = "Includes"
weight = 16
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
+++

It can be helpful to break up larger projects into multiple files, especially when reusing modular pieces of code. BML supports this with the Javascript function `include(path)`.

```bml
{[
    include('path/to/script.bml');
]}
```


The included BML document is then rendered and its output is inserted at the include site. The same random seed is used for the included document.

Named forks are passed back to the outer renderer just as if they had been defined in the main file.

```bml
// In script.bml:
{#foo: (bar), (biz)}
// -----------------
{[
include('script.bml');
]}
{@foo}
{@foo: 0 -> (a), 1 -> (b)}
```

Eval bindings are similarly passed back to the outer renderer, though they are not available for use within the same eval block that called `include`.

```bml
// In script.bml:
{[
    bind({
        foo: 'bar'
    });
]}
// -----------------
{[include('script.bml');]}
{[insert(foo)]}
```

If an include provides an existing fork reference or eval binding, it will be silently ridden with the included version. This behavior allows files to be included multiple times in the same include chain, needed for things like shared dependencies, as BML does not use namespacing.

{% note() %}
Some technical details: Included BML is not post-processed until the rest of the top-level document is. The outer RNG state is not affected by random operations in the included path. Includes are not supported in web browsers.
{% end %}
