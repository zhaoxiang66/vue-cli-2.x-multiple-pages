import Vue from 'vue';
import Router from 'vue-router';
import test1 from '@/pages/test1/view/test1';
Vue.use(Router);

export default new Router({
    mode:"history",
    fallback:false,
    routes:[
        {
            path:"/test1.html/",
            name:"test1",
            component: test1
        }
    ]
})