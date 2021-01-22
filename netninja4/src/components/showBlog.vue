<template>
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>All Blog Articles</h1>
      <input type="text" class="search" v-model="search" placeholder="Search Blogs">
      <!-- This v-for uses filteredBlogs since it receives an array from the filteredBlogs
        computed property. THe filteredBlogs is filtering the array of data using the search
        bar above (see Net Ninja vid. 36). -->
      <div v-for="(blog, index) in filteredBlogs" v-bind:key="index" class="single-blog">
        <!-- This router link has a dynamic v-bind associated to a to route so you can find a post by id/key-->
        <router-link v-bind:to=" '/blog/'+blog.id "> <h2> {{ blog.title | to-upper }} </h2> </router-link>
        <article v-colorOlive> {{ blog.content | snippet }} </article>
      </div>
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
      blogs: [],
      search: '',
    }
  },
  methods: {

  },
  //This section contains filters that are local to this component only
  filters: {
    snippet: function(value){
      return value.slice(0,100) + '...';
    }
  },
  //This section contains custom directives that are local to this component only
  directives: {
    //This directive changes color of text to olive
    'colorOlive': {
      bind(el){
        el.style.color= '#77773c';
      }
    }
  },

  computed: {
    // computed property for search filter. It matches the title and content against the 'search'
    // string type inside data and returns a boolean that is used to filter data from an array
    // i.e 'blog'. The listblog.vue has a mixin there that does the same stuff by importing it from a mixin js
    // file so you could've used that here instead of registering this here locally.
    filteredBlogs: function(){
      return this.blogs.filter((blog)=> {
        return (blog.title.match(this.search) || blog.content.match(this.search));
      });
    }
  },
  //get dummy data from json placeholder
  created() {
     const axios = require('axios');
       axios.get('https://netninja4-b2dd9.firebaseio.com/'+'.json?auth=z36dQGm4rPsdcInfz0nNNyHwh7Mi6enowWUnhVKP')
       .then(response=>{
         //after getting data as response (.then) display it in console
         //apaprantly whatever data comes through is wrapped in a response tag which is in turn
         // wrapped in a data tag in json
         //temporary array for storing. Has only local scope.
         var blogsArray = [];
         //runs a loop until the response.data.posts array runs out of keys(number of array object)
         //as per assigned by firebase
         for(let key in response.data.posts){
           //attaches an id variable to the response.data.posts which is assigned the key value of the array
           //basically makes an id out of the key
           response.data.posts[key].id = key;
           //this will copy and push the new array object to the blogsArray
           blogsArray.push(response.data.posts[key]);
         }
         //we store the data in the "blogs" array declared in data section
         this.blogs = blogsArray;
         console.log(blogsArray);
       });

  }
}
</script>

<style scoped>
  #show-blogs{
    max-width: 800px;
    margin: 0 auto;
  }
  .single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
  }

  .search{
    width: 100%;
  }
</style>
