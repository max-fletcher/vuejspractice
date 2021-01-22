import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//exporting event bus for transporting data from one child to another child component(siblings)
//In this case, transporting 'title' data from header to footer
export const bus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
