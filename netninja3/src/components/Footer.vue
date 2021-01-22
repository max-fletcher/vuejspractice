<template>
  <footer>
    <p>{{ copyright }} {{title}}</p>
  </footer>
</template>

<script>
//Importing event bus from main.js to get data from header and use in created()
import {bus} from '../main';

export default {
  props: {
    copyright:{
      type: String
    },
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

  },
  //This bad boy is called a life-cycle hook. Any function inside will be triggered here after this
  //component or vue instance will be first created
  created(){
  //data currently contains 'Vue Pirate Arrrr !!'
  //format is busName.$on( 'functionName', (data) =>{ rest of function;})
    bus.$on('titleChanged', (data)=>{
      //this as in this component not anythig else
      this.title = data;
    })
  }
}
</script>

<style scoped>

footer{
  background: #222;
  padding: 6px;
}

p{
  color: lightgreen;
  text-align: center;
}

</style>
