+++
title = "Comments"
weight = 12
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
+++

In complex BML documents it can be helpful to annotate your code explaining how things work. BML supports such **comments** with C-like line and block comments which are omitted from its output. You can place comments just about anywhere in a BML document.

### Line comments

Line comments begin with two forward slashes and extend to the end of the line. In place of the comment, BML emits a single newline character.

{% bml_snippet() %}
```bml
// This comment will be omitted
This text will be included
// Line comments are turned into blank lines
comments // can also be at the end of a line
```
{% end %}

Line comments must be preceded or followed by a whitespace, or the beginning/end of the document. This is needed to allow writing things like URLs which include the `//` pattern.

{% bml_snippet() %}
```bml
https://bml-lang.org
```
{% end %}

### Block comments

Multi-line comments are supported using `/* ... */` syntax. All text between `/*` and `*/`, including line breaks, is omitted from BML's output. In place of the block comment, BML emits a single whitespace.

{% bml_snippet() %}
```bml
/*
Multi-line comments
are neat
*/

They are/* 
comment */converted to a space.
```
{% end %}

