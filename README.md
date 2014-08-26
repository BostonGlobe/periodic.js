# periodic.js

## Install

- `bower install periodic.js`

## Dependencies

- [requestAnimationFrame](http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/) - you'll need this to support legacy browsers.

## Usage

``` javascript
var periodic = PeriodicJS();

periodic.setup({
	duration: 1000, // in milliseconds - defaults to 1 minute
	update: function() {
		// this function will run every <duration> milliseconds
		doSomething();
	}
});

function doSomething() {
	// do something here
	
	// resume periodic
	periodic.run();
}

// finally, start the whole thing
periodic.run();
```

Also add an element with `periodicjs-time` class:

``` html
<p class='periodicjs-time'></p>
```

See `index.html` for a full example.


## License

MIT © [The Boston Globe](http://github.com/BostonGlobe)
