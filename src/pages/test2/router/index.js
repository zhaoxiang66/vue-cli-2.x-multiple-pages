import Vue from 'vue';
import Router from 'vue-router';
import test2 from '@/pages/test2/view/test2';
Vue.use(Router);

export default new Router({
    mode:"history",
    fallback:false,
    routes:[
        {
            path:"/test2.html/",
            name:"test2",
            component: test2
        }
    ]
})