# periodic-js

## Install

- `npm install --save periodic-js`

## Usage

``` javascript
import PeriodicJS from 'periodic-js';

const displaySelector = '.periodic';
const periodic = PeriodicJS({
	duration: 3000,
	displaySelector,
	callback: fetchData
});

function fetchData(done) {

	// tell user we are fetching data
	var element = document.querySelector(displaySelector);
	element.innerHTML = 'updating';

	setTimeout(done, 3000);
}

```

Also add an element with the `displaySelector` class you provided earlier:

``` html
<p class='periodic'></p>
```


