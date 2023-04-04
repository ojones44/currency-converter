export default function setTime() {
	const desktopClock = document.getElementById('time');
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

	desktopClock.innerHTML = `${prefixZero(hour)}:${prefixZero(
		minute
	)} ${suffix}`;
}
