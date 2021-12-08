some unorganized notes on how I derived a working `.sublime-syntax` system for BML from my upstream VS Code `bml.tmLanguage.json`.

1. open `bml-vscode/syntaxes` bml.tmlanguage.json in sublime
1. use sublime packagedev command to convert json to plist (Ctrl+Shift+P "PackageDev: Convert (YAML, JSON, PList) to...")
1. rename generated plist file (in `bml-vscode/syntaxes`) to `~/.config/sublime-text/Packages/User/bml.tmLanguage` (removing `.plist` extension)
1. (maybe need to restart sublime)
1. open .tmlanguage file in sublime
1. tools > developer > new syntax from ...
1. patch the `callCommand` matcher to `call\s+(\w*)`
1. patch the generated syntax by replacing `eval:`'s `push` to conform with:
```
eval:
  - match: '(?<!\\)(eval)\s*(\{)'
    captures:
      1: keyword.bml
      2: keyword.control.bml
    embed: scope:source.ts
    embed_scope: source.ts
    escape: '^(\})$'
    escape_captures:
      0: keyword.control.bml
```

note that this *requires* eval blocks are indented, since they terminate with a close-brace alone on a line. I'm not sure if sublime's system is actually able to support the fully smart use-case, since similar bugs can be seen with official sublime syntax files on scripts like:

```html
<html>
<script>
    console.log('</script>');
</script>
</html>
```

I also had to copy Zola's Typescript definition into this syntaxes directory as a workaround to this Zola bug I discovered doing this https://github.com/getzola/zola/issues/1678

Then update Ace by:
1. navigating to ace/tool
1. running `node tmlanguage.js ~/.config/sublime-text/Packages/User/bml.tmLanguage`
1. use magit to preserve patches from before (effectively re-applying the patches)
1. run `ace/build_for_site.sh`
