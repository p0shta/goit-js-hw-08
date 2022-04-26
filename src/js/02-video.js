import Vimeo from '@vimeo/player';

const refs = {
    iframe: document.querySelector('#vimeo-player'),
};

const player = new Vimeo(refs.iframe);
const savedTime = localStorage.getItem('videoplayer-current-time');
const parsedSavedTime = JSON.parse(savedTime);

if (localStorage.getItem('videoplayer-current-time')) {
    player.setCurrentTime(parsedSavedTime.seconds);
}

player.on('timeupdate', function (data) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
});
