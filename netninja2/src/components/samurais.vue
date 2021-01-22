<template>
  <div>
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="(samurai, index) in samurais" v-bind:key="index"> {{ samurai }} </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      samurais: ['sonic','tails','knuckles'],
      title: 'List of Samurais',
    }
  },
  methods: {
  }
}
</script>

<style scoped>
  h1{
    color: blue;
  }
</style>
