import Vue from 'vue'
import App from './App.vue'
import store from "./store/index";
Vue.config.productionTip = false;

const EventBus = new Vue();
Object.defineProperties(Vue.prototype, {
  $bus: {
    get: function () {
      return EventBus
    }
  }
});

new Vue({
  render: h => h(App),
  store,
}).$mount('#app');
