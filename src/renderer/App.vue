<template>
    <div id="app">

        <md-toolbar class="md-primary">
            <div class="md-title">
                Bilibili 弹幕姬 &amp; 点歌姬
            </div>
            <div class="md-toolbar-section-end">
                <router-link to="/">
                    <md-button>状态</md-button>
                </router-link>
                <router-link to="/danmu">
                    <md-button>弹幕</md-button>
                </router-link>
                <router-link to="/diange">
                    <md-button>点歌</md-button>
                </router-link>
            </div>
        </md-toolbar>
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
export default {
    name: 'bilibili-danmuji',
    computed: {
        currentDanmu() {
            const danmu = this.$store.state.room.danmu;
            const length = danmu.length;
            return length ? danmu[length - 1] : null;
        },
    },
    watch: {
        currentDanmu(danmu) {
            if (!danmu) return;
            const name = danmu.name;
            let message = danmu.message;
            if (danmu.type === 'gift') {
                window.speechSynthesis.speak(new SpeechSynthesisUtterance(`${name}${message}`));
                return;
            }
            message = message.replace(/0/g, '零');
            message = message.replace(/1/g, '一');
            message = message.replace(/2/g, '二');
            message = message.replace(/3/g, '三');
            message = message.replace(/4/g, '四');
            message = message.replace(/5/g, '五');
            message = message.replace(/6/g, '六');
            message = message.replace(/7/g, '七');
            message = message.replace(/8/g, '八');
            message = message.replace(/9/g, '九');
            window.speechSynthesis.speak(new SpeechSynthesisUtterance(`${name}说：${message}`));
            if (message.startsWith('#吐痰 ')) {
                this.$store.dispatch('');
            }
        },
    },
    methods: {

    },
    data() {
        return {};
    },
};
</script>

<style scoped>
/* CSS */
.md-drawer {
  width: 200px;
  min-height: 350px;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  height: 600px;
}
main {
  padding: 1rem;
}
</style>
