+++
title = "The Javascript Library"
draft = false
weight = 11
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
+++

The bml library is exposed by a single function:

```ts
bml(sourceString: string, renderSettings: object?)
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
</tbody>
</table>
