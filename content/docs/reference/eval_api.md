+++
title = "The Eval API"
draft = false
weight = 10
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

Some functions are automatically made available to `eval blocks
<eval>` under the `bml` namespace. They can be invoked like any other
javascript function like so:

```bml
eval {
    provide({
        customFunction: () => {
            return bml.randomInt(0, 20);
        }
    });
}
{call customFunction}
```

These functions are not part of the public API of bml. They can only be
accessed in the `eval` block of bml scripts.

------------------------------------------------------------------------

```js
bml.randomFloat(min, max)
```

Return a random float within the given bounds

------------------------------------------------------------------------

```js
bml.randomInt(min, max)
```

Return a random integer within the given bounds
