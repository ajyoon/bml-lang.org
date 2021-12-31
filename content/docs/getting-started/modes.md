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

Simple matchers like these ask BML to look for literal full-text matches. Rules can have any number of matchers separated by commas. The replacement choice to the right of the `->` arrow is just like an inline choice, except it can also contain a special `match` choice which asks BML to leave the matched text as found.

While rendering a document, BML has at most 1 active mode, starting with none. To change the active mode, use the `{use MODE_NAME}` command in your document.

{% bml_snippet() %}
```bml
mode example {
    // Replace with "x" 40% of the time,
    // leaving untouched 60% of the time
    (a), (b), (c) -> {(x), match 60}
}
{use example}
a b c a b c a b c a b c
```
{% end %}

Just as with inline choices, replacement choices can be nested. The `match` choice can currently only be used at the top level.

{% try_it() %}
Modes are useful for designing more complex documents with recurring chance elements. Try out some of these capabilities.
- Write a mode which sometimes replaces periods with question marks and exclamation marks. Allow for the possibility that periods will be preserved using the `match` keyword.
- Try writing a document with two modes and text which alternates between the two using the `{use}` command.
{% end %}

### Advanced Matchers

For more advanced use-cases, matchers can use Javascript regular expressions, defined using JS-style `/regex/` syntax.

{% bml_snippet() %}
```bml
mode example {
    // Replace numbers with dashes 50% of the time
    /\d+/ -> {(---), match}
}
{use example}
123 and non-matching text
```
{% end %}

Matcher regexps are sent directly to [`new RegExp()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp) without any flags (except `y` for internal reasons). BML does not currently support overriding flags.

Those unfamiliar with regular expressions may find these resources helpful:
- [MDN RegExp introduction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
- [MDN RegExp in-depth documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [regex101.com](https://regex101.com/) - interactive regexp builder (be sure to set the ECMAScript flavor)

Regexp matchers are especially useful when used in combination with custom replacer functions, a topic we will cover later. [TODO LINK ME]
