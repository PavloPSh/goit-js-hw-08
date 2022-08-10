import Player from "@vimeo/player";
import throttle from "lodash.throttle";


const iframe = document.querySelector('#vimeo-player');
const player = new Player (iframe);
const LOCAL_STORAGE_KEY = "videoplayer-current-time";
const getCurrentTime = localStorage.getItem(LOCAL_STORAGE_KEY);

function onPlay (currentTime) {
    localStorage.setItem(LOCAL_STORAGE_KEY, currentTime.seconds);
    console.log(currentTime.seconds)
};

player.on('timeupdate', throttle(onPlay, 1000));
player.setCurrentTime(getCurrentTime);