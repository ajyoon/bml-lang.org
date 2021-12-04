+++
title = "Introduction"
draft = false
weight = 10
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

BML is a stochastic markup language that lets you write
chance-determined text with ease.

[Try it online!](https://sandbox.bml-lang.org)

And check out [the VS Code
extension](https://marketplace.visualstudio.com/items?itemName=bml-lang.bml-vscode)
for syntax highlighting and built-in runner support!

# Getting Started

BML can be installed and pulled into your projects using `npm`.
Installing is as simple as:

```sh
npm install bml
```

Once installed, you can use BML locally in node scripts using the
primary package entrypoint function exported by the package.

```js
const bml = require('bml');
const aBmlScript = 'some bml markup';
const bmlOutput = bml(aBmlScript);
console.log(bmlOutput);
```
This function renders a given string of BML markup and returns its
output.

BML is [Free Software](https://www.gnu.org/philosophy/free-sw.html)
under the [BSD 3-Clause
license](https://github.com/ajyoon/bml/blob/master/LICENSE). All source
code is available at <https://github.com/ajyoon/bml>.


{% warning() %}
By default, BML supports [the evaluation of arbitrary
Javascript](@/docs/the-language/language-overview.md#eval). Before running
BML on untrusted input, please consider [disabling this
feature](@/docs/the-language/js-library.md).
{% end %}
