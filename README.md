# Scrollbox

Scrollbox is a cross-browser plugin that keeps the full length of your webpage in view. It does this by making specific sections of your content scrollable whenever the length of your webpage exceeds the available height of the browser window.

## How is this different than what the browser already does?

Different browsers have different scrolling behaviours and different visual styles built-in. This is normal, but it's not always consistent across different devices or orperating systems. Scrollbox tries to avoid the use of built-in browser scrollbars by implementing scrollable containers that look and behave the same way across all browsers, devices and operating systems.

## How do I use Scrollbox?

### Dependencies

Scrollbox requires both scrollbox.css and scrollbox.js files to work. No styling or scripting frameworks are required.

```html
<html>
  <head>
  ...
    <link rel="stylesheet" href="scrollbox.css">
  </head>
  <body>
    ...
    <script type="application/javascript" src="scrollbox.js"></script>
  </body>
</html>
```

### Use

Place any content that you wish to make scrollable inside a container element (HTML) with a class of "scrollbox".

```html
<div class="scrollbox">...</div>
```

You can add a single container around your whole content, or several containers around different sections of your content. Once the page is loaded in the browser, Scrollbox will actively listen for the window.resize() event (JS), and dynamically adjust the height of all .scrollbox containers on the page, according to the options you specify for each container.

### Options

#### Scroll Direction

By default, Scrollbox allows scrolling on both axes (vertical and horizontal). This behaviour can be altered using additional CSS classes.

This container will only scroll _vertically_:

```html
<div class="scrollbox scroll-y">...</div>
```

This container will only scroll _horizontally_:

```html
<div class="scrollbox scroll-x">...</div>
```

#### Height Control

By default, Scrollbox containers have a minimum height of 200px. This is to prevent content from becoming too small to interact with on smaller screens. You can specify different height limits for each container using inline styles (CSS) with {min-height} and {max-height}.

This container will never be _shorter_ than 50px or _taller_ than 500px:

```html
<div class="scrollbox" style="min-height: 50px; max-height: 500px;">...</div>
```

## Demo
https://andreea34.github.io/scrollbox/
