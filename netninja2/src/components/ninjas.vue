<template>
  <div>
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="(ninja, index) in ninjas" v-bind:key="index"> {{ ninja }} </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      ninjas: ['mario','peach','yoshi'],
      title: 'List of Ninjas',
    }
  },
  methods: {
  }
}
</script>

<style scoped>
h1{
  color: red;
}
</style>
