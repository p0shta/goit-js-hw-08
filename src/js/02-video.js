import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const refs = {
    iframe: document.querySelector('#vimeo-player'),
};

const player = new Vimeo(refs.iframe);
const savedPlayerTimeData = localStorage.getItem('videoplayer-current-time');
const parsedPlayerTimeData = JSON.parse(savedPlayerTimeData);

if (savedPlayerTimeData) {
    player.setCurrentTime(parsedPlayerTimeData.seconds);
}

player.on('timeupdate', throttle(setCurrentTimeInLocalStorage, 1000));

function setCurrentTimeInLocalStorage(data) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
}
