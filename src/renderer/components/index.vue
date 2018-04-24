<template>
    <div id="app">
        <md-card class="main">
            <md-card-header>直播间状态</md-card-header>
            <md-card-content>
                <md-list>
                    <md-list-item>当前已连接：{{connected?connected: "无"}}</md-list-item>
                </md-list>
            </md-card-content>
        </md-card>
        <md-card class="connect">
            <md-card-header>连接直播间</md-card-header>
            <md-card-content>
                <md-field>
                    <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请输入房间号</label>
                    <md-icon>tv</md-icon>
                    <md-input v-model="roomId"></md-input>
                </md-field>
                <md-button class="md-raised md-primary" @click="connect">连接</md-button>
            </md-card-content>
        </md-card>
    </div>
</template>

<script>
export default {
    name: 'index',
    methods: {
        connect() {
            this.$store.dispatch('connect', this.roomId);
        },
    },
    data() {
        return {
            roomId: null,
            connected: 123,
        };
    },
};
</script>

<style>
/* CSS */
#app {
  overflow-y: hidden;
}
.md-card {
  float: left;
  margin-bottom: 1rem;
}
.connect {
  width: 250px;
  float: right;
}
.main {
  width: calc(100% - 250px - 1rem);
}
</style>
