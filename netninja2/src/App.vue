<template>
  <div id="app">
    <h1>{{ maintitle }}</h1>
    <ninjas></ninjas>
    <samurais></samurais>
  </div>
</template>

<script>
// importing component samurai to use inside the component ninjas
import samurais from './components/samurais.vue'

export default {
// This component is nested locally so only this component named ninja can use it
// This again has the convention 'componentName': filename as before
  components: {
//Registering Component
    'samurais': samurais,
  },
  data(){
    return{
      maintitle: 'Net Ninja App',
    }
  },
  methods: {

  }
}
</script>

<style>
  h1{
    color: purple;
  }
</style>
