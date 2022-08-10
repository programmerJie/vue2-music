import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)
export default new VueRouter({
    routes:[
        {
            path:'/list',
            component:()=>import("@/views/list")
        },
        {
            path:'/mine',
            component:()=>import("@/views/mine")
        },
        {
            path:'/',
            component:()=>import("@/views/find")
        },
        {
            path:'/yuncun',
            component:()=>import("@/views/yuncun")
        },
        {
            path:'/video',
            component:()=>import("@/views/video")
        },
        {
            path:'/search',
            component:()=>import("@/views/search")
        },
        {
            path:'/songlist',
            component:()=>import("@/views/songlist")
        },
    ]
})