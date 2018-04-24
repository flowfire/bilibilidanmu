import { connect } from '../../../deps/danmu';

const state = {
    room: null,
    connected: false,
    danmu: [],
    wacher: 0,
};

const mutations = {
    changeRoom(state, roomid) {
        state.room = roomid;
        state.connected = true;
        state.danmu = [];
        state.wacher = 0;
    },
    receiveDanmu(state, danmu) {
        state.danmu.push({
            type: danmu.type,
            name: danmu.name,
            message: danmu.message,
            time: danmu.time,
        });
    },
};

const actions = {
    connect({ commit }, roomid) {
        const room = connect(roomid);
        room.on('danmuku.connected', () => {
            commit('changeRoom', roomid);
        });
        room.on('danmaku.message', (msg) => {
            if (msg.type !== 'comment' && msg.type !== 'gift') return;
            commit('receiveDanmu', {
                type: msg.type,
                name: msg.user.name,
                message: msg.comment ? msg.comment : `赠送了 ${msg.gift.count} 个 ${msg.gift.name}。`,
                time: msg.ts,
            });
        });
        return room;
    },
};

export default {
    state,
    mutations,
    actions,
};
