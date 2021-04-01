My fork of yuptude (https://github.com/Pepck/yuptude), adding some features that I wanted:
* Avoid UI getting stuck on page when launched multiple times.
* Keep speed/pitch after closing the UI.
* Restore the previous speed/pitch to the UI when launched again.
* Open yuptude link in a new tab.

I'm pretty happy quickly using https://chriszarate.github.io/bookmarkleter/ to make the .js files into draggable bookmarklets.
I enable:
* URL-encode reserved characters: [space], %, ", <, >, #, @, &, ?
* Wrap in an IIFE (anonymizing function).
* Minify code using Babel Minify. 
