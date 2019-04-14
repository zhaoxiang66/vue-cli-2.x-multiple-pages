import Vue from 'vue'
import App from './App'
import router from './router'
import VueCookie from 'vue-cookie';
import axios from 'axios';
import Qs from 'qs';
import '@/components/global.js';
Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.prototype.$Qs = Qs;//this.$Qs.stringify(params);
Vue.prototype.$cookie = VueCookie;
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
new Vue({
    el:"#app",
    router,
    components:{App},
    template: '<App/>'
})