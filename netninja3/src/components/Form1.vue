<template>
  <div>
    <h1> This is Form One: </h1>
    <form>
      <h3> Login Form </h3>
      <p> Form Data and all... </p>

      <label for="name"> Enter Name: </label>
      <input type="text" placeholder="name" class="name" id="name" name="name" required>

      <br>
      <br>

      <label for="password"> Enter Password: </label>
      <input placeholder="password" class="password" id="pwassword" name="password" required>

      <button v-on:click="handleSubmit"> Submit </button>

    </form>
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

    }
  },
  methods: {

  }
}
</script>

<style scoped>
h1{
  text-align: center;
}

form{
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
}

#useful-links ul{
  padding: 0;
}

#useful-links li{
  display: inline-block;
  margin-right: 10px;
}

form > div{
  padding: 20px;
  background: #eee;
  margin: 20px 0;
}

#form-header{
  background: #ddd;
  border: 1px solid #bbb;
}

</style>
