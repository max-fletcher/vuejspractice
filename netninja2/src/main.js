import Vue from 'vue'
import App from './App.vue'
//importing a component to make it globally accessible to any vue object
import ninjas from './components/ninjas.vue'

Vue.config.productionTip = false
//This component is nested globally so any other component/vue object here can use it
//Don't forget to use the command in line 3 to import it from the components directory
//1st parameter is the name we use to access it and the 2nd parameter is the file name
Vue.component('ninjas', ninjas);

new Vue({
  render: h => h(App),
}).$mount('#app')
