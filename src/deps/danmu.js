const LIVE = require('bilibili-live');
let connected = false;
const room = new LIVE.Room();
const connect = (id) => {
    room.roomId = id;
    room.roomURL = id;
    if (connected) room.disconnect();
    room.connect();
    room.on('danmaku.connected', () => { connected = true; });
    room.on('danmaku.error', () => { connected = false; });
    room.on('danmaku.close', () => { connected = false; });
    return room;
};

const disconnect = () => { };

export {
    connect,
    disconnect,
};
