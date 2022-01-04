+++
title = "Escapes"
weight = 16
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
+++

Sometimes you may want to write text which would normally trigger BML behavior without doing so. Escapes allow you to do this.

### Backslashes

You can insert any of BML's special characters literally by prefixing them with a backslash.

{% bml_snippet() %}
```bml
- curly braces \{(test)}
- square brackets \[[test]]
- a literal backslash \\
```
{% end %}

### Escape sequences

Backslashes can be used to insert some whitespace escape sequences, specifically `\n` for line breaks and `\t` for tabs.

{% bml_snippet() %}
```bml
first line\nsecond line

\tindented
```
{% end %}

Lines ending with backslashes trigger special [visual line break](/docs/guide/formatting#visual-line-breaks) behavior.

### Literal blocks

You can ask BML to skip over any region of text by enclosing it in double square brackets.

{% bml_snippet() %}
```bml
mode example {
    (see?) -> {(replaced)}
}
{use example}
[[{(this text), (is treated), (literally)}

modes skip literal blocks too: see?]]
```
{% end %}

Post-processing steps like whitespace correction still run on literal blocks.

