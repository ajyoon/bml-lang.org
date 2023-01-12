+++
title = "Document Settings"
weight = 16
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
+++

Certain behaviors of BML can be configured by binding a special `settings` object in an eval block.

```bml
{[
    bind({
        settings: {
            whitespaceCleanup: true,
            punctuationCleanup: true,
            capitalizationCleanup: true
        }
    });
]}
```

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
<td><code>whitespaceCleanup</code></td>
<td><code>true</code></td>
<td>Clean up the whitespace in the output document. <a href="/docs/guide/formatting#whitespace-cleanup">See here for details.</a></td>
</tr>
<tr>
<td><code>punctuationCleanup</code></td>
<td><code>true</code></td>
<td>Perform simple English-like correction of whitespace around punctuation marks. <a href="/docs/guide/formatting#punctuation-cleanup">See here for details.</a></td>
</tr>
<tr>
<td><code>capitalizationCleanup</code></td>
<td><code>true</code></td>
<td>Try to correct capitalization of the first words of sentences. <a href="/docs/guide/formatting#capitalization-cleanup">See here for details.</a></td>
</tr>
</tbody>
</table>
