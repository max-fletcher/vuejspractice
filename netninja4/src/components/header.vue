// this page sort of makes a navbar with a bunch of buttons to different routes
<template>
  <nav>
    <ul>
<!--   many ways to bind routes to router-link. Check docs. -->
      <li> <router-link to="/" exact> Blog </router-link> </li>
      <li> <router-link to="/add" exact> Add Blog </router-link> </li>
      <li> <router-link to="/list" exact> List of Blogs </router-link> </li>
    </ul>
  </nav>
</template>

<script>

export default {
  props: {

  },
  components: {

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

ul{
list-style-type: none;
text-align: center;
margin: 0;
}

li{
  display: inline-block;
  margin: 0 10px;
}

a{
  color: #fff;
  text-decoration: none;
  padding: 6px 8px;
  border-radius: 10px;
}

nav{
  background: #444;
  padding: 14px 0;
  margin-bottom: 40px;
}

.router-link-active{
  background: #eee;
  color: #444;
}

</style>
