import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')// App คือ component ที่โหลดเป็นตัวแรก
// อ้างถึง id="app" ใน indexedDB.html
