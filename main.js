const time = document.getElementById('time');
// const inset = document.querySelector('.time');

function setTime() {
	let hour = new Date().getHours();
	let minute = new Date().getMinutes();
	// let second = new Date().getSeconds();
	let suffix;

	if (hour < 12) {
		suffix = 'AM';
	} else {
		suffix = 'PM';
	}

	if (minute < 10) {
		time.innerHTML = `${hour}:0${minute} ${suffix}`;
		return;
	}

	time.innerHTML = `${hour}:${minute} ${suffix}`;
}

setTime();
setInterval(setTime, 1000);
time.style.borderStyle = 'inset';
