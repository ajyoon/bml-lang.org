+++
title = "Working Offline"
weight = 18
sort_by = "weight"
template = "docs/page.html"

[extra]
toc = true
+++

The sandbox is great for playing around with BML, but as you go deeper down the chance text rabbit hole you'll want to start working with a proper text editor that lets you save your work and track changes. We recommend people use Visual Studio Code for this, as we've created an official language extension that provides much the same experience as the online sandbox.

### Installing VS Code and the BML extension

Visual Studio Code is a popular text editor that's easy to learn and which supports many third party extensions. You can install it from [its official website here](https://code.visualstudio.com/).

Once you've installed it, launch it and [open the extensions view](https://code.visualstudio.com/docs/editor/extension-marketplace). Search for the `bml-lang` extension and install. Once installed, VS Code will be able to create, edit, and run BML files.

### Editing and running `.bml` files

In VS Code, try creating a file named `example.bml` with some contents like below and save it wherever you keep your projects on your computer.

```bml
Hello {(blurry), (chancy)} world!
```

VS Code should provide syntax highlighting on `.bml` files.

You can run your code using the built-in "Run BML" command. From the top menu, click "View" → "Command Palette" and type "Run BML" and click it or press enter. An output pane at the bottom of the window should show the output of your document.

You can bind this to a shortcut key of your choice using "File" → "Preferences" → "Keyboard Shortcuts", searching for "Run BML", and binding some memorable key to it.
