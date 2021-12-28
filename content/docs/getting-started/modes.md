+++
title = "Modes"
weight = 12
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
+++

So far, we've discussed one-off choice blocks which introduce chance elements at explicitly indicated points in BML documents. But what if we want to introduce chance processes acting more broadly across a document? **Modes** allow us to do this by triggering behavior where search patterns are found.

{% bml_snippet() %}
```bml
mode example {
    (nothing) as {(something), match}
}
{use example}
I have nothing to say
```
{% end %}

Modes are defined at the beginning of a document in its **prelude** section. They consist of a series of matchers and corresponding replacers.


