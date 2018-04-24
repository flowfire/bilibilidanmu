const state = {
    music: [],
};

const mutations = {
    addMusic(state, song) {

    },
    removeMusic(state, song) {

    },
};

const actions = {
    someAsyncTask({ commit }) {
        // do something async
        commit('INCREMENT_MAIN_COUNTER');
    },
};

export default {
    state,
    mutations,
    actions,
};
