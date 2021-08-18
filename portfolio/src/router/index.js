import Vue from 'vue';
import VueRouter from 'vue-router';
import Lander from './../components/lander.vue'
Vue.use(VueRouter);
let router = new VueRouter({
    routes:[
        {path:'/', name:"Landing", component: Lander},
        
    ]
});
export default router;