
# HTMLImport.js

A tiny JavaScript polyfill that enables `<import src="…">` tags for reusable HTML partials.

> This library must be served over HTTP as browsers block `fetch()` on `file://`.
## Features

- `<import src="…">` tag support
- Relative and nested imports
- Lightweight, dependency-free library
- Intended as a pragmatic polyfill, not a framework
- Works in all modern browsers
## Installation

Install using npm

```bash
npm install https://github.com/juanvel4000/htmlimport.js.git
```

Or, import it using `JSDelivr`

```html
<script src="https://cdn.jsdelivr.net/gh/juanvel4000/htmlimport.js/htmlimport.js"></script>
```
    
## Example

View the demo in the `demo/` directory in this repository for a better example.

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>HTMLImport.js Test</title>
        <script src="./htmlimport.js"></script>
    </head>
    <body>
        <import src="components/welcome.html"></import>
        <import src="components/lorem.html"></import>
    </body>
</html>
```


## License

**HTMLImport.js** uses the [BSD 3-Clause](https://spdx.org/licenses/BSD-3-Clause.html) License

