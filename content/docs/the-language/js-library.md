+++
title = "The Javascript Library"
draft = false
weight = 11
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
top = false
+++

The bml library is exposed by a single function:

```js
bml(sourceString, renderSettings)
```

where `sourceString` is a single string holding the contents of a
complete bml document, and `renderSettings` is an optional `Object` with
the following properties:

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
<td><code>randomSeed</code></td>
<td><code>null</code></td>
<td>a random seed for the render session. may be any <code>Object</code>. All bml documents rendered on the same bml version with the same random seed should result in the same output, assuming the bml document's <code>eval</code> block is deterministic or uses the <a href="/docs/the-language/eval-api/">provided functions for random components</a></td>
</tr>
<tr>
<td><code>allowEval</code></td>
<td><code>true</code></td>
<td>A boolean flag controlling whether <code>eval</code> blocks should be executed in this render. This is primarily useful for security purposes.</td>
</tr>
<tr>
<td><code>renderMarkdown</code></td>
<td><code>false</code></td>
<td>Whether or not the rendered <code>bml</code> document should be post-processed as markdown. If <code>true</code>, the output will be processed as markdown and output as HTML.</td>
</tr>
<tr>
<td><code>whitespaceCleanup</code></td>
<td><code>true</code></td>
<td>Clean up the whitespace in the output document. This is useful for cleaning up unintentional whitespace left over from BML directives by 1) removing all trailing whitespace in every line; 2) collapsing all runs of over one blank line into just one; 3) removing blank lines at the start of the document; 4) ensuring the text ends with a single line break. Note that this is generally not necessary when markdown is enabled, but it can't hurt unless you use markdown's trailing whitespace features.</td>
</tr>
</tbody>
</table>
