+++
title = "Choice References"
weight = 11
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
+++

Choices can also be context-aware by referencing each other. First, label a choice block by opening it with a name followed by a colon.

```bml
I have {thing: (some things), (nothing)} to say
```

After executing a named choice, BML remembers which branch it took. Future choices can depend on this earlier result by opening the block with the name again, this time prefixed with an `@` sign. Now instead of listing choices, you can declare mappings from the original choice result to any other text. 

{% bml_snippet() %}
```bml
I have {thing: (some things), (nothing)} to say
```
```bml
and I am saying {@thing: 0 -> (them), 1 -> (it)}.
```
{% end %}

The numbers to the left of the arrows are indexes referring to the branch taken in the referred choice block. Here, the `0` branch will be taken if the `thing` choice took its first branch. Similarly, the `1` branch will be taken if the referred choice took its second branch.

{% note() %}
References use 0-based indexing. This is likely to be a bit confusing for non-programmers, but it is necessary to harmonize with the Javascript code that can be embedded in documents. It may be helpful to think of 0-based indexes are offsets from the starting position.
{% end %}

Mappings can be many-to-one---that is, multiple choice indexes can be associated with a single result. Where you would write a single choice index, simply write a comma-separated list of them.

{% bml_snippet() %}
```bml
I have {thing: (some things), (something), (nothing)} to say
and I am saying {@thing: 0 -> (them), 1, 2 -> (it)}.
```
{% end %}

You can also add a fallback option that applies to any other choice not mapped. Simply include a choice without any associated index. In this way we can simplify the above code as:

{% bml_snippet() %}
```bml
I have {thing: (some things), (something), (nothing)} to say
and I am saying {@thing: 0 -> (them), (it)}.
```
{% end %}

We can also ask BML to repeat the referenced choice result verbatim using a bare reference without any mappings. This is especially useful for copying nested choice results.

{% bml_snippet() %}
```bml
{choice:
    (I have {(something), (nothing)} to say),
    (John Cage wrote about Silence)
}
{@choice}
```
{% end %}

Finally, we can ask BML to silently execute choices without inserting their results by prefixing their name with a `#` sign. This is great for complex documents where we might want to separate out the definition of a complex choice from its use where it might interfere with the legibility of a sentence.

{% bml_snippet() %}
```bml
{#thing: (some things), (something), (nothing)}
I have {@thing} to say
and I am saying {@thing: 0 -> (them), (it)}.
```
{% end %}

{% try_it() %}
Try writing some references in [the sandbox](/sandbox)!
- One common use for references is handling varying plurality. Write a named choice that can be either singular or plural, then use a reference to describe it in a grammatically correct way. (e.g. "I bought 1/2 apple/s")
- Another potential use is with gendered pronouns where a described person may be of varying gender. Write a named choice with several names, and use a reference to write corresponding pronouns for the selected name. Try using a fallback option for gender neutral names.
- Try using bare references (`{@test}`) to copy the result of a nested choice.
- Try using silent references (`{#test: ...} {@test}`) to separate the declaration and use of a choice. Can you think of other use-cases for silent references?
{% end %}
