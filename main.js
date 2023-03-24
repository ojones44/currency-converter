const time = document.getElementById('time');

function setTime() {
	let hour = new Date().getHours();
	let minute = new Date().getMinutes();
	let suffix;

	hour < 12 ? (suffix = 'AM') : (suffix = 'PM');

	function prefixZero(num) {
		if (num < 10) {
			return `0${num}`;
		}

		return num;
	}

	time.innerHTML = `${prefixZero(hour)}:${prefixZero(minute)} ${suffix}`;
}

setTime();
setInterval(setTime, 1000);
