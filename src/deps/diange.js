const MUSIC = require('simple-netease-cloud-music');
const Music = new MUSIC();
const Player = id => `http://music.163.com/song/media/outer/url?id=${id}.mp3`;
const name2url = async (name) => {
    let songId = null;
    if (/^\d+$/.test(name)) {
        songId = name;
    } else {
        const music = await Music.search('锦鲤抄');
        if (music.songs[0]) songId = music.songs[0].id;
    }
    if (songId) return Player(songId);
    return null;
};

const empty = () => { };

export {
    name2url,
    empty,
};
