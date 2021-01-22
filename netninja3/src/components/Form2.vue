<template>
  <div>
    <h1> This is Form Two: </h1>
    <form>
      <h3> Contact Us: </h3>
      <p> Thy Information about thee form 2 : </p>

      <label for="name"> Book: </label>
      <input type="text" placeholder="name" class="name" id="name" name="name" required>

      <br>
      <br>

      <p> Enter Comment: </p>
      <textarea name="comment" placeholder="Type Fool !!" class="comment" id="comment" rows="3" cols="50" required></textarea>
      <br>
      <br>
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
