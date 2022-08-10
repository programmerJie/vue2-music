import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入字体图标
import '@/assets/fonts/font.css'
//引入初始化样式
import '@/assets/css/css.css'
//引入vant组件库
import { Swipe, SwipeItem } from 'vant';
import { Lazyload } from 'vant';
import { Col, Row } from 'vant';
import { Image as VanImage } from 'vant';
import { Sticky } from 'vant';
import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Sticky);
Vue.use(VanImage);
Vue.use(Col);
Vue.use(Row);
Vue.use(Lazyload);
Vue.use(Swipe);
Vue.use(SwipeItem);

//清楚vue提示
Vue.config.productionTip = false

new Vue({
  el:'#app',
  router,
  store,
  render: h => h(App)
})
