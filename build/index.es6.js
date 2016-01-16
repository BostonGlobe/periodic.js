import { timer } from 'd3-timer';

function PeriodicJS(opts) {

	const { duration, displaySelector, callback } = opts;
	let timer$$;

	function displayTimeLeft(time) {

		// find the current displayed time
		let element = document.querySelector(displaySelector);
		const currentDisplayedTime = element.innerHTML;

		// format incoming time
		const formattedTime = Math.ceil(time/1000);

		// don't update dom element with same string
		if (formattedTime.toString() !== currentDisplayedTime) {
			element.innerHTML = 'update in ' + formattedTime;
		}

	}

	function run() {

		timer$$ = timer((elapsed, time) => {

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

	run();
}

export default PeriodicJS;