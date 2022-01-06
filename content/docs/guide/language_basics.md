+++
title = "Language Basics"
weight = 10
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
+++

BML is a lightweight programming language for writing text whose particular realizations are left to chance. It can be used to write [chance poetry](https://weareinvitedtoclimb.org), translations, varying form letters, game dialogues, and more. BML is designed to be easy to learn and use by non-technical writers, so we hope this guide will be useful for both new and experienced programmers alike.

### The Sandbox

The easiest way to get started with BML is to visit [the BML sandbox](/sandbox). This is an online editor for BML text which automatically regenerates output from the code you write. It also includes a cheat sheet for the most commonly used chance operation commands. We recommend you have the sandbox open on another tab and try out the code samples here as you encounter them.

### BML is just text

BML is designed to work seamlessly as a layer over plain old text. A few special characters are reserved for invoking BML (`{curly braces}` mostly), but besides these BML looks just like plain, unformatted text.

{% bml_snippet() %}
```bml
Hello, world!
```
{% end %}

Unlike the word processors typically used by writers which have opaque file formats (e.g. `.doc`, `.pages`) that require editing in specific programs, BML documents are written just as you see above and saved verbatim in `.bml` files. The BML interpreter is the program responsible for executing the document's chance operations and rendering new versions of your document for the world. That interpreter can be used offline or embedded on websites like it is here.

{% try_it() %}
Open [the sandbox](/sandbox) and try writing some plain old text.
{% end %}

### Choices

The fundamental chance construct BML offers is inline choices. Rather than writing *A* or *B*, you can write both and let BML choose for your readers automatically:

{% bml_snippet() %}
```bml
{(A), (B)}
```
{% end %}

Amidst the plain text of your document, BML commands are invoked using curly braces (`{}`). Choice blocks are written by opening curly braces and writing a comma-separated list of options. Each option is wrapped in parentheses.

{% bml_snippet() %}
```bml
I have {(something), (nothing)} to say.
```
{% end %}

Choice blocks can have any number of choices, and can be used anywhere in your text. Choices can be any text, including nothing (indicated by a bare set of parentheses `()`). You can also insert line breaks and indentation anywhere inside the BML command context without affecting the output text. This is very helpful for visually organizing more complex choices.

{% bml_snippet() %}
```bml
I have {
    (something),
    (a thing),
    (nothing)
} to say
and I am {(not), ()} saying it.
```
{% end %}

With each choice and branch, the number of possible output documents increases dramatically. Already this example has 6 possibilities (3 × 2).

### Weights

By default, each choice is equally likely to be chosen. This can be overriden by explicitly assigning weights expressed as probability percentages.

{% bml_snippet() %}
```bml
I have {(nothing) 70, (something)} to say.
```
{% end %}

In this example, `nothing` is 70% likely to be chosen, and `something` is 30%. (Any unclaimed probability is equally divided among unweighted choices.)

### Nesting choices

The contents of parentheses-delimited choices can be any BML text, which means we can also use choices inside them just like anywhere else.

{% bml_snippet() %}
```bml
{
    (I have {(something), (nothing)} to say),
    (John Cage wrote about Silence)
}
```
{% end %}

You can think of choices as graphs with points where possibilities branch and come back together. We can visualize the branching structure of choices by sketching out diagrams like these:

![A diagram of the tree structure of the previous code snippet](/img/diagrams/nesting_choices.svg)

{% try_it() %}
We've covered a lot of ground! The techniques you've learned are already enough to start writing documents rich with possibility. In fact, this is practically everything BML's original author used to write [a whole book of chance poetry](https://weareinvitedtoclimb.org/)! Before we go into more advanced concepts, open up [the sandbox](/sandbox) and practice what you've learned. Try writing text with simple, weighted, and nesting choices.

- Choices can be nested arbitrarily deeply. Try writing a doubly nested one.
- Play around with line breaks and indentation in choices. Notice which placements cause those formatting changes to be included in or omitted from the output text.
- Try writing an easter egg choice branch that only appears for 0.1% of readers.
- Review the above graph diagram. How many possible paths are there through it? This is the number of unique BML outputs from the corresponding example.
{% end %}

