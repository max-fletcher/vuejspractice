<template>
  <div id="ninjas">
    <ul>
      <li v-for="(ninja, index) in ninjas" v-bind:key="index" v-on:click="ninja.show = !ninja.show">
        <h3> {{ ninja.name }} </h3>
        <h5 v-show="ninja.show"> {{ ninja.specialty }} </h5>
      </li>
    </ul>
    <button v-on:click="deleteNinja">Delete Ninja</button>
  </div>
</template>

<script>
export default {
  components: {

  },
  //You can use props: ['ninjas'] here to catch data('ninjas') as a prop from app.vue without validation instead.

  //The following lines are used to validate data when passed to a component as prop
  //Currently this checks the type of data passes() which has to be an array. It also uses 'required'
  //which means the component works only if it catches an array item called ninjas(same as laravel)
  props:{
    ninjas:{
      type: Array,
      required: true,
    },
  },
  data(){
    return{

    }
  },
  methods: {
    deleteNinja: function(){
      this.ninjas.pop();
    },
  }
}
</script>

<style scoped>

#ninjas{
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}

ul{
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}

li{
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}

</style>
