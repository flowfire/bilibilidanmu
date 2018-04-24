import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '*',
            redirect: '/',
        },
        {
            path: '/',
            name: 'index',
            component: require('@/components/index').default,
        },
        {
            path: '/danmu',
            name: 'index',
            component: require('@/components/danmu').default,
        },
        {
            path: '/diange',
            name: 'index',
            component: require('@/components/diange').default,
        },
    ],
});
