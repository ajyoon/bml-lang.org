+++
title = "Formatting"
weight = 18
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
+++

BML deals mostly with plain text, so it doesn't have much special syntax for formatting documents. Besides a few automatic cleanup processes, BML generally outputs your text plain and without formatting.

### Automatic formatting cleanup

Because BML's chance operations can introduce a lot of noisy whitespace in counterintuitive ways, BML by default performs a series of post-processing tasks to correct common errors. Each can be disabled using [document settings](/docs/guide/doc-settings).

#### Whitespace Cleanup

Controlled by `settings.whitespaceCleanup`

- Removes all trailing whitespace in every line
- Collapses all runs of over one blank line into just one
- Similarly collapses all runs of spaces in the middle of lines
- Removes all whitespace from the start and end of the document
- Ensures the text ends with a single line break.

{% bml_snippet() %}
```bml

Whitespace at doc start is removed
Whitespace    in lines is collapsed
    But indentation is preserved


> 1 blank line is collapsed
and whitespace at doc end is removed

```
{% end %}

#### Punctuation Cleanup

Controlled by `settings.punctuationCleanup`

- Performs simple English-like correction of whitespace around punctuation marks by snapping `, . : ; ! ?` and similar to the end of preceding words when separated by whitespace (including line breaks)

{% bml_snippet() %}
```bml
Conveniently , BML corrects placement of punctuation {(.), (!)}
This lets you write chancy punctuation more legibly.
```
{% end %}

#### Capitalization Cleanup

Controlled by `settings.punctuationCleanup`

- Tries to correct capitalization of the first words of sentences.

{% bml_snippet() %}
```bml
BML can correct capitalization {(;), (.)}
this is useful when sentence divisions are chancy.
```
{% end %}

### Visual Line Breaks

In complex documents with lots of choices, especially nested ones, it's very helpful to use indentation to visually organize logical levels. These line breaks and indentation will not be included in the output as long as they are placed in the *braces* context, not within the parentheses which enclose literal text.

{% bml_snippet() %}
```bml
test: {
    (X),
    ({
        (Y),
        (Z)
    })
}
```
{% end %}

But for complex documents and those with lengthy choice bodies, *visual line breaks* allow you to use line breaks and indentation without including them in the output. Simply end a line with a single backslash `\`; the backslash, line break, and any following indentation will collapse into a single whitespace character.

{% bml_snippet() %}
```bml
one \
    line

another {
    (single \
     line),
    ({
        (nested \
         line),
        (nested \
         line 2)
    })
}
```
{% end %}

{% note() %}
If you're [targetting a format-aware language like markdown](/docs/guide/formatting#example-using-bml-to-write-markdown) or [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML), visual newlines may not be needed since such languages often treat all line breaks as visual line breaks.
{% end %}

### Example: Using BML to write Markdown

While BML itself doesn't include any formatting capability, you can use BML to write documents in other languages which do. A common BML target is Markdown, a ubiquitous and simple markup language for converting legible plaintext into website-ready HTML.

Markdown is a good deal easier to learn than BML, and there are loads of resources out there for it, for example [this cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) and [this interactive tutorial](https://www.markdowntutorial.com).

To write BML code targeting Markdown, simply write Markdown and insert BML directives as needed. 

{% bml_snippet() %}
```bml
# Hello {(blurry), (chancy)} world!
1. {(An ordered), (A)} list
2. Second entry
```
{% end %}

This output can then be sent to a Markdown processor and converted to formatted and CSS-styleable HTML.
