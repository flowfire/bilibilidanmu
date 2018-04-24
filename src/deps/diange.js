const MUSIC = require("simple-netease-cloud-music");
const Music = new MUSIC;
const Player = (id) => {
    return `http://music.163.com/song/media/outer/url?id=${id}.mp3`;
};
const name2url = async name => {
    let songId = null;
    if (/^\d+$/.test(name)) {
        songId = name;
    } else {
        let music = await Music.search("锦鲤抄");
        if (music.songs[0]) songId = music.songs[0].id;
    }
    if (songId) return Player(id);
    return null;
};

export {
    name2url,
}