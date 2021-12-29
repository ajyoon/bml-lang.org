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
    (nothing) -> {(something), match}
}
{use example}
I have nothing to say
```
{% end %}

Modes are defined at the beginning of a document. They consist of a series of replacement rules associating matchers and choices. When a mode is active, BML searches for text which matches its rules. When a match is found, BML replaces the matched text with the executed result of its associated choice.

Modes are defined with the following syntax:
```bml
mode modeName {
    // A rule
    (matcher 1), (matcher 2), ... -> {(choice), ...}
    // Another
    (matcher 3), (matcher 4), ... -> {(choice), ...}
}
```


