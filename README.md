# periodic.js

## Install

- `bower install periodic.js`

## Usage

``` javascript
periodic.setup({
	duration: 1000, // in milliseconds - defaults to 1 minute
	update: function() {
	  // this function will run every <duration> milliseconds
	}
});
```

Also add an element with `periodicjs-time` class:

``` html
<p class='periodicjs-time'></p>
```

Call `periodic.run()` once at start, and then when your `update` function is complete.

See `index.html` for a full example.


## License

MIT © [The Boston Globe](http://github.com/BostonGlobe)
