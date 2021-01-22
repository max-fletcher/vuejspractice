<template>
 <div>
   <app-header></app-header>
   <router-view></router-view>
 </div>
</template>

<script>
// These are currently commented as we are using routes. If your app doesn't use
// routes then uncomment. BTW these are to import components. As you know, we need to
// import then register components to use them inside another component.
// This is to import

//import addBlog from './components/addBlog.vue';
//import showBlog from './components/showBlog.vue';
//import listBlogs from './components/listBlogs.vue';
import header from './components/header.vue';

export default {
  props: {

  },
  components: {
// These are currently commented as we are using routes. If your app doesn't use
// routes then uncomment.As you know, we need to
// import then register components to use them inside another component.
// This is to register

//    'add-blog': addBlog,
//    'show-blog': showBlog,
//    'list-blogs': listBlogs,
      'app-header' : header,
  },
  data(){
    return{

    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
