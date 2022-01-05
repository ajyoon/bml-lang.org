+++
title = "Custom Javascript"
weight = 15
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
+++

Between choices, nested choices, references, and modes, BML offers deep chance operation capabilities out of the box. For more advanced use-cases, BML allows you to define custom Javascript functions which act on your document through choices and modes.

{% note() %}
If you aren't a comfortable Javascript programmer and you don't immediately need these features, consider skipping this page.
{% end %}

### `eval` blocks

Like modes, custom Javascript code is defined at the beginning of a document in an `eval` block. Eval blocks are evaluated as Javascript through [the `Function` constructor.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/Function). Functions are exposed to BML through a special `provide({})` function.

{% bml_snippet() %}
```bml
eval {
    provide({
        test: (match, inlineCall) => {
            return 'Hello, world!'
        }
    });
}
{call test}
```
{% end %}

Functions should have the signature:

```ts
(match: RegExpMatchArray | null,
 inlineCall: { input: string, index: number } | null) -> string
```


Custom functions are invoked using the `call` command from inline or mode choices. When called from a mode, the [regexp match](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec#return_value) is passed to `match`; when called inline the complete document and index of the call command are passed to `inlineCall`.

{% bml_snippet() %}
```bml
eval {
    function preview(str) {
        return JSON.stringify(str.substring(0, 10) + '...');
    }

    provide({
        test: (match, inlineCall) => {
           if (match) {
               return `\
match found: ${JSON.stringify(match)}
match.input: ${preview(match.input)}
match.index: ${match.index}`;
           } else {
               return `\
inlineCall found:
inlineCall.input: ${preview(inlineCall.input)}
inlineCall.index: ${inlineCall.index}`;
           }
        }
    });
}
mode example {
    (foo) -> {call test}
}
{use example}
foo
------
{call test}
```
{% end %}

{% try_it() %}
Try writing a custom function and mode which sometimes capitalizes the first letter of words starting with the letter *A*.
{% end %}
