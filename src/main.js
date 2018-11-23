import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'


import {
            Button,
            Row,
            Col,
            NavBar,
            Icon,
            Popup,
            Tag,
            Cell,
            CellGroup,
            Tabbar,
            TabbarItem,
            List,
            Search,
            PullRefresh,
            Toast,
            Collapse,
            CollapseItem,
            Checkbox,
            CheckboxGroup,
            Field
        } from 'vant'

import "Ass/font/iconfont.css"

 Vue.use( Button )
     .use( Row )
     .use( Col )
     .use( NavBar )
     .use( Icon )
     .use( Popup )
     .use( Tag )
     .use( Cell )
     .use( CellGroup )
     .use( Tabbar )
     .use( TabbarItem )
    .use( List )
     .use( Search )
     .use( PullRefresh )
     .use( Toast )
     .use( Collapse )
     .use( CollapseItem )
     .use( Checkbox )
     .use( CheckboxGroup )
     .use( Field );



// 基础样式初始化
import 'Base/m_base.css'

Vue.config.productionTip = false;

//将axios 直接绑定到vue对象的原型里面方便全局使用

Vue.prototype.$ajax= axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
