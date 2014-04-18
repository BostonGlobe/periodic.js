 var periodic = (function() {

	var options = {};

	var _elapsed;
	var _startTime;
	var _timeUntilUpdate = 0;
	var _rAF;
	var _hasRunAtLeastOnce = false;

	function display(time) {

		// find the current displayed time
		var element = document.querySelector('.periodicjs-time');
		var currentDisplayedTime = element.innerHTML;

		// format incoming time
		var formattedTime = Math.ceil(time/1000);

		// don't update dom element with same string
		if (formattedTime.toString() !== currentDisplayedTime) {
			element.innerHTML = 'update in ' + formattedTime;
		}

	}

	function draw() {

		_rAF = requestAnimationFrame(draw);

		if (!_startTime) {
			_startTime = new Date().getTime();
		}

		var now = new Date().getTime();

		// how much time has passed since we started?
		_elapsed = now - _startTime;

		// how much time is left until we update?
		_timeUntilUpdate = (_hasRunAtLeastOnce ? options.duration : 0) - _elapsed;

		if (_timeUntilUpdate <= 0) {

			// time's up - stop rAF!
			cancelAnimationFrame(_rAF);

			// reset startTime
			_startTime = null;

			// run the update - whatever it is
			options.update();

			// we've now run this at least once
			_hasRunAtLeastOnce = true;

		} else {

			// show how much time until update
			display(_timeUntilUpdate);

		}

	}

	function setup(opts) {

		// default to 1 minute
		options.duration = opts.duration || 60*1000;
		options.update = opts.update;

	}

	return {
		setup: setup,
		run: draw
	};

})();