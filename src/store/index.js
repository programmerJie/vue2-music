import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


export default new Vuex.Store({
    //存储数据
    state:{

    },
    //操作数据
    mutations:{
        playmusicstate(state,playmusic){
            state.palymusic = playmusic
        },
    },
    //响应组件中的动作
    actions:{

    },
    //计算属性
    getters:{

    },
    modules:{

    }
})