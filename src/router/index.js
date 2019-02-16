import Vue from 'vue';
import Router from 'vue-router';
import Activity from "@/components/Activity";
import Dataviz from "@/components/Dataviz";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Activity',
            component: Activity
        },
        {
            path: '/dataviz',
            name: 'Dataviz',
            component: Dataviz
        }
    ]
})
