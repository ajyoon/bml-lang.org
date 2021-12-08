+++
title = "Language Overview"
draft = false
weight = 10
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

The Blur Markup Language (BML) is a hybrid language combining
Javascript, BML constructs, and whatever target format you use.
Markdown and HTML are supported out of the box.

# document structure {#document-structure}

A BML document consists of two sections: an optional
[prelude](#prelude) and a [body](@/docs/the-language/language-overview.md#body-section). The prelude is considered finished at
the first non-prelude-looking text.

    [prelude]

    [body]

# the prelude {#prelude}

A BML prelude consists of:

-   any number of [eval blocks](@/docs/the-language/language-overview.md#eval)
-   any number of [modes](@/docs/the-language/language-overview.md#modes)

a basic example:

```bml
eval {
    provide({
        settings: { version: '0.0.24' },
        someFunc: (match, string, matchIndex) => {
            return 'some replacement';
        }
    });
}

mode someMode {
    (x) as (y)
}
```

## the eval block {#eval}

The `eval` block allows you to evaluate arbitrary javascript prior to
interpreting the document body. This is primarily useful for two
purposes:

-   overriding default [document settings](@/docs/the-language/language-overview.md#document-settings)
-   defining [replacement functions](@/docs/the-language/language-overview.md#replacement-functions)

Both settings and defined replacement functions are exposed to the BML
interpreter via the special `provide` function, which takes an object
and exposes all its fields to BML.

```bml
eval {
    provide({
        someFunc: (match, string, matchIndex) => {
            return 'some replacement';
        }
    });

    // Because `provide` is just a JS function accepting an object,
    // you can also use plain `function` syntax like so:
    function someFunc(match, string, matchIndex) {
        return 'some replacement';
    }
    provide({
        someFunc
    });
}
```

`eval` blocks can also access a very small "standard library" through
the BML namespace. See [the Eval API reference](@/docs/the-language/eval-api.md).

{% warning() %}
Internally, `eval` blocks are executed inside a JS `new Function(...)`.
While this is more secure than raw JS `eval`, it should not be lightly
used on untrusted input. `eval` blocks can be disabled entirely with the
[render setting](@/docs/the-language/language-overview.md#render-settings) `allowEval`.
{% end %}


### bml settings {#document-settings}

The `settings` object is a javascript object of setting overrides that
may be provided in the [eval block](@/docs/the-language/language-overview.md#eval). The `settings` object must
be given the magic name `settings` to be recognized.

```bml
eval {
    provide({
        settings: {
            version: 'x.y.z'
        }
    });
}
```

If it is created during prelude evaluation, all provided settings will
override their defaults.

<table>
<colgroup>
<col/>
<col/>
<col/>
</colgroup>
<tbody>
<tr>
<td>setting</td>
<td>default</td>
<td>purpose</td>
</tr>
<tr>
<td><code>version</code></td>
<td><code>null</code></td>
<td>The <code>bml</code> version number the document is written for. If present, <code>bml</code> will check that this matches the version running. If it does not, a warning will be logged to the console.</td>
</tr>
<tr>
<td><code>markdownSettings</code></td>
<td><code>{}</code></td>
<td>A settings object to be passed to <code>marked</code>, the markdown processor built in to <code>bml</code>. For details on what settings can be passed to this, see the <a href="https://github.com/markedjs/marked/blob/master/USING_ADVANCED.md#options">marked docs</a>. This only has an effect if <code>bml</code> is invoked with markdown enabled via its <code>renderSettings</code>.</td>
</tr>
</tbody>
</table>

### replacement functions {#replacement-functions}

Replacement functions allow you to perform custom substitutions in your
document. They may be used by modes in `rules` and in [inline commands](@/docs/the-language/language-overview.md#inline-commands).

Replacement functions have the following signature:

```ts
    function replacementFunction(
        match: string[], document: string, index: number): string
```

-   `match` is a [regex
    match](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
    array. Most often, you'll just want to access `match[0]` since it
    contains the entire matched text. In the case of
    [inline commands](@/docs/the-language/language-overview.md#inline-commands), this will always be simply `['']`.
-   `document` is the entire raw text of the bml document, including the
    prelude.
-   `index` is the index in `string` where the match was found.

The function should return a string which is to replace the text found
at the point.

{% warning() %}
Any replacement function which might use random elements should use
the [provided eval API](@/docs/the-language/eval-api.md) for random operations. Direct
invocation of `Math.random()` will undermine bml's ability
to create reproducible document versions pinned to random seeds.
{% end %}

## modes {#modes}

A mode has a name and consists of any number of `rules`

```bml
mode someModeName {
    // a rule
    // another rule
}
```

## rules {#rules}

Each rule consists of a list of matchers and a list of replacements.
During rendering, all matchers for the active rule are tested across the
[BML body](@/docs/the-language/language-overview.md#body-section), and when matches are found they are replaced
using the replacer defined in the corresponding rule.

A matcher can be a simple string (any text enclosed in parentheses) or a
regular expression delimited by slashes (JS style).

```bml
mode someModeName {
    (a matcher) as (foo)
    /a regex matcher/ as (foo)
}
```

Multiple matchers can apply to a single rule, making the previous
example equivalent to:

```bml
mode someModeName {
    (a matcher), /a regex matcher/ as (foo)
}
```

Replacements can be literal strings or references to replacement
[replacement functions](@/docs/the-language/language-overview.md#replacement-functions) defined in eval blocks.
Replacement functions references must be prefaced with the keyword
`call`. Here we have a rule which matches on all words starting with the
letter *A* and uses a replacement function to capitalize the word.

```bml
eval {
    provide({
        // capitalize the match contents
        capitalize: (match, string, index) {
            return match[0].toUpperCase();
        }
    });
}

mode capitalizingWordsStartingWithA {
    /\s[aA](\w?)/ as call capitalize
}
```

Multiple possible replacements can be specified. The unmodified matched
text is always included as a possible replacement.

```bml
(foo) as (bar), call baz
```

A weighted random choice is taken between all replacement options. By
default, all options are equally likely to be chosen, but this can be
overridden by providing numerical weights to replacements.

```bml
(foo) as (bar) 40
```

The weights given are considered to be percentages of all possible
outcomes. All remaining probability is distributed equally among all
options which have no explicit value (always including the unmodified
matched text as an option).

<table>
<colgroup>
<col/>
<col/>
</colgroup>
<tbody>
<tr>
<td>rule</td>
<td>meaning</td>
</tr>
<tr>
<td><code>(foo) as (bar)</code></td>
<td>"foo" 50% of the time, "bar" 50% of the time.</td>
</tr>
<tr>
<td><code>(foo) as (bar) 60</code></td>
<td>"foo" 40% of the time, "bar" 60% of the time</td>
</tr>
<tr>
<td><code>(foo) as (bar) 50, (baz)</code></td>
<td>"foo" 25% of the time, "bar" 50% of the time, "baz" 25% of the time. Notice how the remaining unclaimed 50% of probability is distributed evenly among all other options.</td>
</tr>
<tr>
<td><code>(foo) as (bar) 40, call someFunc 60</code></td>
<td>"bar" 40% of the time, call <code>someFunc</code> 60% of the time. Note that, because 100% of probability has been claimed, "foo" will never be chosen.</td>
</tr>
</tbody>
</table>

If the sum of all weights is greater than or equal to `100`, the
unmodified matched text will never be chosen.

{% note() %}
If the sum of all weights exceeds 100, the values will be normalized
such that their sum is 100. For example, `(foo) as (bar) 100, (baz) 900`
is equivalent to `(foo) as (bar) 10, (baz) 90`
{% end %}

# the body {#body-section}

The body of a BML document is just normal text, aside from
[commands](@/docs/the-language/language-overview.md#inline-commands) and literal blocks. BML considers the body to
have begun at its first encounter of non-prelude-like text.

## literal blocks {#literal-blocks}

Literal blocks tell BML that their enclosed text should not be
processed by any rules. They are notated with double square brackets:

```bml
[[this text will never be processed by any rules]]
```

## commands {#inline-commands}

Commands tell BML to do something during body processing. They are
notated with curly braces.

### mode changes {#use-commands}

The active mode can be changed at any time using a `use` command:

```bml
// prelude...

text immediately following the prelude will not have an active mode.

{use someMode}

this text will be processed using `someMode`
```

### choose commands {#choose-commands}

A weighted choice may be declared inline using the same syntax for the
replacement component of [rules](@/docs/the-language/language-overview.md#rules):

```bml
this is {(some text) 30, (an example), call someFunc}
```

30% of the time, this will be rendered as *"this is some text"*, 35% of
the time as *"this is an example"*, and 35% of the time `someFunc` will
be called.

This is interpreted exactly as if it were a one-off rule which applies
at the point of the command. The only difference is that invoked
replacement functions will be passed the `match` argument of `['']`.

This can also be useful for unconditionally calling functions with a
single-choice block:

```bml
{call someFunc}
```

### references {#references}

For more context-dependent text, it can be necessary for some choices to
depend on the results of previously made choices. BML experimentally
supports this with a system of references and back-references.

Any [choose command](@/docs/the-language/language-overview.md#choose-commands) can be prefixed with an
identifier like so:

```bml
{SomeChoiceIdentifier: (Alice), (Bob)} went to the store.
```

This identifier can then be referred back to using a reference command
mapping the result from `SomeChoiceIdentifier` to other text by index:

```bml
{@SomeChoiceIdentifier: 0 -> (She), 1 -> (He)} bought some tofu.
```

Reference commands need not exhaustively cover every possible outcome
from the referred choice, but a fallback option should be provided as
the final branch and without an associated index arrow:

```bml
{Name: (Alex), (Riley), (Alice)} went to the store.
{@Name: 2 -> (She), (They)} bought some tofu.
```

Fallback options are also necessary if the referred choice was never
made. This can happen if the referred choice is in a
[nested evaluation](@/docs/the-language/language-overview.md#nested-evaluation) path that was not taken. If a
reference command refers to an unexcuted (or non-existant) choice, or if
it provides no mapping for the choice index, the fallback will be used.
If no fallback is present, a warning will be logged and an empty string
will be inserted.

Reference indexes can also be conveniently aggregated with commas:

```bml
{Name: (Alex), (Riley), (Alice), (Bob)} went to the store.
{@Name: 0, 1 -> (They), 2 -> (She), 3 -> (He)} bought some tofu.
```

Bare references without any branches or fallback will unconditionally
copy the output from the referred choice, including any nested
evaluations executed within it:

```bml
{Name: (Alice), (Bob)}
{@Name}
```

For complex documents, it can be helpful to define complex or frequently
referenced choices separately from their use. This can be achieved by
marking named choices as silent with a `#` identifier prefix. Silent
choices are executed and tracked, but not inserted in the output text:

```bml
{#Name: (Alice), (Bob)}
{@Name}
```

# nested evaluation {#nested-evaluation}

Text replacements inserted by [choose commands](@/docs/the-language/language-overview.md#choose-commands),
[reference commands](@/docs/the-language/language-overview.md#references), and [rules](@/docs/the-language/language-overview.md#rules) are
themselves treated as body bml, so they can contain everything from
choose commands to call commands to mode switches. Modes and rules are
evaluated on them as well.

For instance, we could set up nested choices like so:

```bml
outer with {(inner 1), (inner 2 with {(nested 1!), (nested 2!)})}
```

In effect, this results in a choice tree with the following possible
paths:

-   outer with inner 1
-   outer with inner 2 with nested 1!
-   outer with inner 2 with nested 2!

As you can imagine, these can become messy quickly in nested branches,
so it's best practice to incorporate line breaks:

```bml
outer with {
  (inner 1),
  (inner 2 with {
    (nested 1!), (nested 2!)})}
```

But be sure to include those line breaks in the braces part of the
declaration, not the inner text in parentheses, since those will be
interpreted as part of the replacement text.

Rules are also evaluated on chosen text, for instance:

```bml
mode exampleMode {
  (foo) as (bar) 50, (baz) 25
}

some outer text with {
  (inner without magic word),
  (inner with magic word foo)}
```

Which can be rendered as:

-   some outer text with inner without magic word
-   some outer text with inner with magic word bar
-   some outer text with inner with magic word baz
-   some outer text with inner with magic word foo \[no-op rule branch
    taking the unclaimed probability of 25% in the rule\]

Note that nested evaluation *does not* occur on text inserted by
function calls or by text left untouched by "no-op" rule branches.

## escapes {#escapes}

Special characters like brackets and braces can be inserted literally by
prefixing them with a backslash escape:

```bml
\{these braces will be inserted literally\}
```

Escapes can also be used to insert **visual line breaks**. By making the
last character in a line a backslash, the line break and any following
whitespace is collapsed into a single whitespace. For example,

```bml
foo\
     bar
```

will be rendered as simply "foo bar". This is useful for visually
organizing and indenting complex text, especially in nested choices.
