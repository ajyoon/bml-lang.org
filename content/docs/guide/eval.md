+++
title = "Custom Javascript"
weight = 15
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
+++

Between forks, nested forks, and references, BML offers deep chance operation capabilities out of the box. For more advanced use-cases, BML allows you to run custom Javascript throughout your document.

{% note() %}
If you aren't a comfortable Javascript programmer and you don't immediately need these features, consider skipping this page.
{% end %}

### Eval branches

Javascript code is defined in a fork branch, marked with square brackets. If you want to unconditionally run the code, simply define a single-branch fork:

```bml
{[
    insert('foo');
]}
```

Eval blocks are evaluated as Javascript through [the `Function` constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/Function). They pass data back to BML with two provided functions - `insert` and `bind`.

`insert` simply takes a string and inserts it in the rendered output.

{% bml_snippet() %}
```bml
{[
    insert('foo');
]}
```
{% end %}

You can mark variables to be saved between eval blocks with the `bind` function. It takes an object where all its keys are valid javascript identifiers, and injects its members into every following eval block.

{% bml_snippet() %}
```bml
{[
    bind({
        someValue: 'bar',
        myFunc: (value) => {
            insert(value);
        }
    });
]}
{[myFunc('foo')]}
{[myFunc(someValue)]}
```
{% end %}


Once bound, you cannot bind the same name again, but you can change their values by simply assigning to them.


{% bml_snippet() %}
```bml
{[
    bind({
        someValue: 'bar',
        myFunc: (value) => {
            insert(value);
        }
    });
]}
{[
    myFunc(someValue);
    // This change will be saved in the execution context
    someValue = 'biz';
]}
{[myFunc(someValue)]}
```
{% end %}

### The Eval API

Some additional functions are provided to the executation context through the reserved `bml` object. These are currently limited to methods which generate random numbers using BML's random number generator, which is necessary to ensure reproducibility when BML is run with a fixed seed.

#### bml.randomFloat(min, max)

Return a random float within the given bounds

{% bml_snippet() %}
```bml
{[
    insert(bml.randomFloat(1, 2));
]}
```
{% end %}


#### bml.randomInt(min, max)

Return a random integer greater than or equal to `min` and less than `max`.

{% bml_snippet() %}
```bml
{[
    insert(bml.randomInt(1, 10));
]}
```
{% end %}
