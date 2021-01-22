<template>
  <header>
    <h1 v-on:click="changeTitle1"> {{ title }} </h1>
    <button v-on:click="changeTitle2">Change Title Locally(Primitive)</button>
    <button style="margin-left: 5px" v-on:click="changeTitle3">Change Title of Footer Using Event Bus</button>
  </header>
</template>

<script>
//Importing event bus declared in main.js to export data from header to and use in footer
import {bus} from '../main';

export default {
  //prop 'title' received from the App.vue file
  props: {
    title:{
      type: String
    },
  },
  components: {

  },
  data(){
    return{

    }
  },
  methods: {
    changeTitle1: function(){
      // This is an event. The format is this.$emit('functionName', variable/data);
      // This will modify the data from the source and ergo, passed as a reference not a primitive
      this.$emit('changeTitle1','Vue Wizards');
    },

    changeTitle2: function(){
      //Using this will cause the data to be primitive so it will maintain its
      //original copy.
      this.title = "Vue Samurai";
    },

    changeTitle3: function(){
      //Using event bus. This sends data to the footer since bus will be imported there.
      bus.$emit('titleChanged', 'Vue Pirate Arrrr !!');
    },
  },
}

</script>

<style scoped>

header{
  background: lightgreen;
  padding: 10px;
}

h1{
  color: #222;
  text-align: center;
}


</style>
