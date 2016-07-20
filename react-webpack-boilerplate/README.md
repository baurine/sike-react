run `npm install` to download the project dependencies:

```
npm install
```

use "normalize.css" and flexbox style in `css/index.css`:

```css
@import "normalize.css";

/* Add your favourite HTML tags if you'd like */
body, div, span, a, img, h1, h2, h3, h4, h5 {
  box-sizing: border-box;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex-shrink: 0;
  align-content: flex-start;

  border: 0 solid black;
  margin: 0;
  padding: 0;
}

* {
  position: relative;
}
```

If you like, you can add your favourite html5 tags (e.g. section, article, nav, etc.) to the flexbox default list.

start development:

```
# make all
```
