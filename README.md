# Foundations of Python Programming: Functions First Edition
This repository contains the source code for the "Functions First" edition of the book Foundations of Python Programming. Originally forked from the [Runestone RST FOPP](https://github.com/RunestoneInteractive/fopp) repository, this fork has been detached as it is now authored in a different markup language and can no longer be reconciled with the original.

## Building the Book
You can build this book locally and test drive modifications to the text as well as interactive elements. [PreTeXt](https://github.com/PreTeXtBook/pretext) and [Runestone](https://github.com/RunestoneInteractive/rs) are undergoing active development and eventually a Docker container will likely be the easiest way to get up and running. However, for now you can do the following (I recommend working within a Python virtual environment):

1. Clone this repository to your local machine.
2. `pip install -r requirements.txt`
3. `pretext build web`
4. `pretext view web`

That's it!

## Found a mistake? Want some more detail?
We welcome your feedback! Please [open an issue](https://github.com/MRU-COMP1701-dev/fopp-pretext/issues) if you find a mistake in the content, the sequence, or the exercises. We also welcome suggestions on improvements to the text or additional exercises. If you are feeling particularly ambitious you can fork this repository, make your changes, and submit a pull request.