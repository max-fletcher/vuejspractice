//this component is gonna get a specific post when we provide an id in the URL
<template>
  <div id="single-blog">
    <h1> {{ blog.title }} </h1>
    <article> {{ blog.content }} </article>
    <p>Author: {{ blog.author }}</p>
    <ul>
      <li v-for="(category,index) in blog.categories" v-bind:key="index"> {{ category }} </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {

  },
  components: {

  },
  data(){
    return{
    // this will grab the post id from route parameter(when used in URL in browser)
    // using vue-router. If your route has a name parameter, use this.$route.params.name
      id: this.$route.params.id,
    //format for a variable that stores associative array
      blog: {},
    }
  },
  created(){
    const axios = require('axios');
    axios.get('https://netninja4-b2dd9.firebaseio.com/posts/'+this.id+'.json?auth=z36dQGm4rPsdcInfz0nNNyHwh7Mi6enowWUnhVKP')
    .then(response => {
// same description as in listBlog.vue
      this.blog = response.data;
   });
  },
  methods: {

  }
}
</script>

<style scoped>
#single-blog{
  max-width: 960px;
  margin: 0 auto;
}

</style>
