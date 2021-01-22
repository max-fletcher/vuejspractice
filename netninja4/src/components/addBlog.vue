<template>
  <div id="add-blog">
    <h2> Add a New Blog Post </h2>
    <form v-if="!submitted" v-on:key="componentKey">
      <label for="blogTitle"> Blog Title: </label>
      <input v-model.lazy="blog.title" type="text" placeholder="Enter Blog Title" name="blogTitle" value="" required>
      <label for="blogContent"> Blog Content: </label>
      <textarea v-model.lazy="blog.content" name="blogContent" placeholder="Enter Content" rows="3" cols="50"></textarea>
      <div id="checkboxes">
        <label> Ninjas </label>
        <input type="checkbox" value="ninjas" v-model="blog.categories">
        <label> Wizards </label>
        <input type="checkbox" value="wizards" v-model="blog.categories">
        <label> Samurais </label>
        <input type="checkbox" value="samurais" v-model="blog.categories">
        <label> Warriors </label>
        <input type="checkbox" value="warriors" v-model="blog.categories">
      </div>
      <label> Author: </label>
      <select v-model="blog.author">
        <option disabled value=""> Please select one </option>
        <option v-for="(author, index) in authors" v-bind:key="index"> {{ author }} </option>
      </select>
      <!-- If you don't add the prevent subscript, then you wont a be able to see the response in console.log -->
      <button v-on:click.prevent="post"> Add Blog </button>
    </form>
    <div v-if="submitted">
      <h1> Thank You For Submitting Your Post !! </h1>
      <button v-on:click="reset"> Return to Add Blog </button>
    </div>
    <div id="preview">
      <h3> Preview Blog </h3>
      <p> Blog Title:{{ blog.title }} </p>
      <p> Blog Content: </p>
      <p> {{ blog.content }} </p>
      <p> Blog Categories: </p>
      <ul>
        <li v-for="(category, index) in blog.categories" v-bind:key="index"> {{category}} </li>
      </ul>
      <p> Authors: {{ blog.author }} </p>
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
      blog:{
        title: '',
        content: '',
        categories: [],
        blog: '',
        author: '',
      },
      authors: ['Ninja Gaiden', 'Samurai Saksa' , 'Warrior Ned'],
      submitted: false,
      componentKey: 0,
    }
  },
  methods: {
      post: function(){
       const axios = require('axios');
       // this axios post call is sending data to firebase so the 1st parameter is the API endpoint which
       // is the URL, and the 2nd parameter is the data you are passing which is this.blog in this case.
       // Remember, blog is a JSON object in this case which works like an associative array.
         axios.post('https://netninja4-b2dd9.firebaseio.com/posts.json', this.blog)
         .then(data => {
           console.log(data);
           this.submitted = true;
       });
     },
     reset: function(){
       this.blog = {};
       this.submitted = !this.submitted;
     }
  }
}
</script>

<style scoped>

  #add-blog *{
    box-sizing: border-box;
  }

  #add-blog{
    margin: 20px auto;
    max-width: 500px;
  }

  label{
    display: block;
    margin: 20px 0 10px;
  }

  input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
  }

#preview{
  padding:  10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}

h3{
  margin-top: 10px;
}

#checkbox input{
  display: inline-block;
  margin-right: 10px;
}

#checkbox label{
  display: inline-block;
}

</style>
