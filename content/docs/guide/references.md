+++
title = "References"
weight = 11
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
+++

Forks can also be context-aware by referencing each other. First, label a fork by opening it with an id followed by a colon.

```bml
I have {thing: (some things), (nothing)} to say
```

After executing a fork, BML remembers which branch it took. Future forks can depend on this earlier result by opening the block with the id again, this time prefixed with an `@` sign. Now instead of listing choices, you can declare mappings from the original choice result to any other text. 

{% bml_snippet() %}
```bml
I have {thing: (some things), (nothing)} to say
```
```bml
and I am saying {@thing: 0 -> (them), 1 -> (it)}.
```
{% end %}

The numbers to the left of the arrows are indexes referring to the branch taken in the referred fork. Here, the `0` branch will be taken if the `thing` fork took its first branch. Similarly, the `1` branch will be taken if the referred fork took its second branch.

{% note() %}
References use 0-based indexing. This is likely to be a bit confusing for non-programmers, but it is necessary to harmonize with the Javascript code that can be embedded in documents. It may be helpful to think of 0-based indexes as offsets from the starting position.
{% end %}

Mappings can be many-to-one---that is, multiple branch indexes can be associated with a single result. Where you would write a single branch index, simply write a comma-separated list of them.

{% bml_snippet() %}
```bml
I have {thing: (some things), (something), (nothing)} to say
and I am saying {@thing: 0 -> (them), 1, 2 -> (it)}.
```
{% end %}

You can also add fallback options that apply to any other choice not mapped. Simply include a branch, or multiple, without any associated index. In this way we can simplify the above code as:

{% bml_snippet() %}
```bml
I have {thing: (some things), (something), (nothing)} to say
and I am saying {@thing: 0 -> (them), (it)}.
```
{% end %}

Fallbacks are necessary when referencing forks that may not always execute, like nested forks.

{% bml_snippet() %}
```bml
{
    (I have {thing: (something), (nothing)} to say),
    (John Cage wrote about Silence)
}
{@thing:
    0 -> (and I am not saying it),
    1 -> (and I am saying it),
    (and in his "Lecture on Nothing" he wrote this)}
```
{% end %}

We can ask BML to repeat the referenced fork result verbatim using a bare reference without any mappings. This is especially useful for copying nested fork results.

{% bml_snippet() %}
```bml
{choice:
    (I have {(something), (nothing)} to say),
    (John Cage wrote about Silence)
}
{@choice}
```
{% end %}

We can similarly ask BML to re-execute a fork by using the 'copy' syntax with a `@!` sign instead. This is useful for concisely reusing fork code when we want to allow the possibility of the original output being repeated. When a fork is re-executed in this way, it also updates the stored execution result so that subsequent references will be mapped relative to the most recent execution.

{% bml_snippet() %}
```bml
{choice: (something), (nothing)} is {@!choice},
// Subsequent references are relative to the last execution.
and {@choice} is always {@choice: 0 -> (some thing), 1 -> (no thing)}.
```
{% end %}


Finally, we can ask BML to silently execute forks without inserting their results by prefixing their id with a `#` sign. This is great for complex documents where we might want to separate out the definition of a complex fork from its use where it might interfere with the legibility of a sentence.

{% bml_snippet() %}
```bml
{#thing: (some things), (something), (nothing)}
I have {@thing} to say
and I am saying {@thing: 0 -> (them), (it)}.
```
{% end %}

{% try_it() %}
Try writing some references in [the sandbox](/sandbox)!
- One common use for references is handling varying plurality. Write a named fork that can be either singular or plural, then use a reference to describe it in a grammatically correct way. (e.g. "I bought 1/2 apple/s")
- Another potential use is with gendered pronouns where a described person may be of varying gender. Write a named fork with several names, and use a reference to write corresponding pronouns for the selected name. Try using a fallback option for gender neutral names.
- Try using bare references (`{@test}`) to copy the result of a nested fork.
- Try using silent forks (`{#test: ...} {@test}`) to separate the declaration and use of a fork.
{% end %}
