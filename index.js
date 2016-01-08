import { timer as d3Timer } from 'd3-timer';

export default function Periodic(opts) {

	const { duration, displaySelector, callback } = opts;
	let timer;

	function displayTimeLeft(time) {

		// find the current displayed time
		var element = document.querySelector(displaySelector);
		var currentDisplayedTime = element.innerHTML;

		// format incoming time
		var formattedTime = Math.ceil(time/1000);

		// don't update dom element with same string
		if (formattedTime.toString() !== currentDisplayedTime) {
			element.innerHTML = 'update in ' + formattedTime;
		}

	}

	function run() {

		timer = d3Timer((elapsed, time) => {

			// tell user how much time is left
			displayTimeLeft(duration - elapsed);

			// are we done?
			if (elapsed > duration) {
				timer.stop();

				// call user-provided callback, and pass along run,
				// so they can resume the timer, if so desired
				callback(run);
			}

		});

	}

	run();
}
