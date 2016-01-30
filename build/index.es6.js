import { timer } from 'd3-timer';

function PeriodicJS(opts) {
	var duration = opts.duration;
	var displaySelector = opts.displaySelector;
	var callback = opts.callback;
	var runImmediately = opts.runImmediately;

	var timer$$ = undefined;

	function displayTimeLeft(time) {

		// find the current displayed time
		var element = document.querySelector(displaySelector);
		var currentDisplayedTime = element.innerHTML;

		// format incoming time
		var formattedTime = Math.ceil(time / 1000);

		// don't update dom element with same string
		if (formattedTime.toString() !== currentDisplayedTime) {
			element.innerHTML = 'Update in ' + formattedTime;
		}
	}

	function run() {

		timer$$ = timer(function (elapsed, time) {

			// tell user how much time is left
			displayTimeLeft(duration - elapsed);

			// are we done?
			if (elapsed > duration) {
				timer$$.stop();

				// call user-provided callback, and pass along run,
				// so they can resume the timer, if so desired
				callback(run);
			}
		});
	}

	if (runImmediately) {
		callback(run);
	} else {
		run();
	}
}

export default PeriodicJS;