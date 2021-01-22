import Vue from 'vue'
import App from './App.vue'
// This is for importing from dependencies after installing axios using npm
import axios from 'axios'
// This is for importing from dependencies after installing vue-router using npm
// You can use any name you want but your router name(in this case, Vuerouter) has to match the name
// inside Vue.use(routeName);
import VueRouter from 'vue-router'
//importing routes.js. Can be any name. In this example it is Routes.
import Routes from './routes'


//This line is to register and use axios after import from dependencies
Vue.prototype.$http = axios;
//This line is to use vue router after import from dependencies
Vue.use(VueRouter);

//for registering routes from routes.js to be used in mounting
const router = new VueRouter({
  routes: Routes,
  //this makes the hashes in the URL during routing disappear
  mode: 'history'
});

Vue.config.productionTip = false

// Custom directive that colours different elements different colours randomly,
// Usually the bind life-cycle hook takes 3 parameters as shown: bind(el, binding, vnode). For some reason,
// if a parameter is declared and not used, new version of vue doesn't allow shit.
Vue.directive('rainbow',{
  bind(el){
    el.style.color= "#" + Math.random().toString().slice(2,8);
  }
});

// Another Custom Directive that randomly generates themes
Vue.directive('theme',{
  bind(el, binding){
    if(binding.value == 'wide'){
      el.style.maxWidth = "1200px";
    }
    else if(binding.value == 'narrow'){
      el.style.maxWidth = "800px";
    }
    if(binding.arg == 'column'){
      el.style.background = '#ddd';
      el.style.padding = '20px';
    }
  }
});

// A filter that converts a data to upper-case
//This one is global
Vue.filter('to-upper', function(value){
  //.toUpperCase is a built-in javascript function that converts a string to uppercase
    return value.toUpperCase()
});

new Vue({
  render: h => h(App),
  //routes will be initialized when the app is constructed
  router: router
}).$mount('#app')
