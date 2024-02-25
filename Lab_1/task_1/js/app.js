// ------------------- Variables & Nodes -------------------
const video = document.querySelector('[data-video]');
const playButton = document.querySelector('[data-play]');
const pauseButton = document.querySelector('[data-pause]');
const forwardButton = document.querySelector('[data-forward]');
const backwardButton = document.querySelector('[data-backward]');
const muteButton = document.querySelector('[data-mute]');
const unmuteButton = document.querySelector('[data-unmute]');
const videoVolume = document.querySelector('[data-volume]');
const timer = document.querySelector('[data-current-time]');
const timerBar = document.querySelector('[data-timer]');
const speed = document.querySelector('[data-speed]');
const fullScreenButton = document.querySelector('[data-full-screen]');
timerBar.value = 0;
let videoMinutes;
let videoSeconds;

video.addEventListener('loadedmetadata', () => {
	videoMinutes = Math.floor(+video.duration / 60);
	videoSeconds = Math.floor(+video.duration % 60);
	timerBar.max = Math.round(video.duration);
});

// ------------------- Functions -------------------

function setTime() {
	const minutes = Math.floor(video.currentTime / 60);
	const seconds = Math.floor(video.currentTime - minutes * 60);

	const minuteValue = minutes.toString().padStart(2, '0');
	const secondValue = seconds.toString().padStart(2, '0');

	const videoTime = `${minuteValue}:${secondValue}`;
	timer.textContent = videoTime;

	timerBar.value = video.currentTime;
	console.log(timerBar.value);
	// const barLength = timerWrapper.clientWidth * (video.currentTime / video.duration);
	// timerBar.style.width = `${barLength}px`;
}

// ------------------- Event Listeners -------------------

playButton.addEventListener('click', () => {
	video.play();
});

pauseButton.addEventListener('click', () => {
	video.pause();
});

forwardButton.addEventListener('click', () => {
	video.currentTime += 10;
});

backwardButton.addEventListener('click', () => {
	video.currentTime -= 10;
});

muteButton.addEventListener('click', () => {
	video.muted = true;
});

unmuteButton.addEventListener('click', () => {
	video.muted = false;
});

videoVolume.addEventListener('input', () => {
	video.volume = videoVolume.value / 100;
});

video.addEventListener('timeupdate', setTime);

speed.addEventListener('input', () => {
	video.playbackRate = speed.value;
});

fullScreenButton.addEventListener('click', () => {
	video.requestFullscreen();
});

timerBar.addEventListener('input', () => {
	video.currentTime = timerBar.value;
});
