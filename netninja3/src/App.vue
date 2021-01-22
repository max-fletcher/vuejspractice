<template>
  <div id="app">
<!-- This is using events. For this case, it is defined is the header component function. The format is
v-on:nameOfEvent="function($event)". The nameOfEvent is defined inside the child component
(i.e Header.vue) while the function($event) is defined inside the parent (i.e App.vue).
On clicking, the changeTitle function will fire inside Header.vue. The changeTitle function
will pass data to updateTitle with some data as an event object. Next, the updateTitle function
is fired with that data as parameter and will do its thing. -->
    <app-header v-bind:title="title" v-on:changeTitle1="updateTitle($event)"></app-header>

<!-- What the attribute ninjas="ninjas" does is takes ninjas from data(below) in this component,
sends it to the app-ninjas(a.k.a Ninjas.vue component) as a reference. We need to use v-bind to accomplish
this. There, the prop: 'ninjas' catches the data. After that, HTML there can be used to define how the
data will be shown inside the template (Ninjas.Vue). It is rendered and sent here(to App.vue) when
we import it and use the app-ninjas tag. -->

    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
    <hr>
    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>

<!-- This uses slots -->
    <form-helper>
      <div slot="form-header">
          <h3> This is the title of the form </h3>
          <p> Information about the form </p>
      </div>
      <div slot="form-fields">
          <label for="name"> Enter Name: </label>
          <input type="text" placeholder="name" class="name" id="name" name="name" required>
          <br>
          <br>
          <label for="password"> Enter Password: </label>
          <input placeholder="password" class="password" id="pwassword" name="password" required>
      </div>
      <div slot="form-controls">
          <button v-on:click="handleSubmit"> Submit </button>
      </div>
    </form-helper>

<!-- Showing Dynamic Components. For now, it is going to show 2 separate forms based on a button click.
The button changes the value of the componentName variable. BTW <form1></form1> and <component is="form1">
</component> renders the same thing so we replace form1 with variable componentName to make it dynamic.
Then we can just change the value of componentName using button -->
    <component v-bind:is="componentName"></component>
    <br>
    <button v-on:click="toggleform()"> Toggle Form </button>

<!-- Inside the app-footer, we are v-binding the copyright and title to this tag so we can send it
as a props to the footer (tag named app-footer is linked to the Footer.Vue file. There, data will
be rendered as a prop, placed inside{{ copyright }} and {{ title }} and sent back here due to prop
importing(importing of the header file in this App.vue file)-->
    <app-footer v-bind:copyright="copyright" v-bind:title="title"> </app-footer>

  </div>
</template>

<script>
//importing other vue components to be used inside this component(App.vue)
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Ninjas from './components/Ninjas.vue';
//for showing form with slots
import FormHelper from './components/FormHelper.vue';
//for showing dynamic components
import Form1 from './components/Form1.vue';
import Form2 from './components/Form2.vue';

export default {
  components: {
//used app-header as name instead of header as name as it overlaps with header tag in HTML
//same for others
    'app-header': Header,
    'app-footer': Footer,
    'app-ninjas': Ninjas,
    'form-helper': FormHelper,
    'form1': Form1,
    'form2': Form2,
  },
  data(){
    return{
      ninjas:[
        {name: 'Ryu', specialty: 'Being a Street Fighter', show: false},
        {name: 'Tom', specialty: 'Bothering Jerry', show: false},
        {name: 'Jerry', specialty: 'Outsmarting Tom', show: false},
        {name: 'Yoda', specialty: 'Wisdom, I have', show: false},
        {name: 'Pitfall Harry', specialty: 'Not falling into pits I suppose', show: false},
      ],
      //title variable used to demonstrate primitive type data(as opposed to ref. type data)
      title: 'Vue Ninjas',
      copyright: 'Copyright 2020 Ninjas are a property of Japan',
      //this is used for dynamic components
      componentName: 'form2',
    }
  },
  methods: {
//Function to be fired if an event is fired from Header.vue
// The updatedTitle variable is actually an event object passed from Header.vue via the changeTitle fucntion
    updateTitle: function(updatedTitle){
      this.title = updatedTitle;
    },

    handleSubmit: function(){

    },
//function to toggle the value of componentName from form1 to form2 and vice versa
    toggleform: function(){
      if(this.componentName == "form1"){
        this.componentName = "form2";
      }
      else{
        this.componentName = "form1";
      }
    },

  },
  computed: {

  },

  //These are Lifecycle hooks. Each Executes before/after each action. Just enable/disable them as you please.


  beforeCreate() {
    //do something before creating vue instance
  // alert('before Created');
  },
  created() {
    //do something after creating vue instance
  //  alert('After Created');
  },
  beforeMount() {
    //do something before mounting vue instance
  // alert('before Mounted');
  },
  beforeUpdate() {
    //do something before updating vue instance
  //  alert('before Updated');
  },
  updated() {
    //do something after updating vue instance
  //  alert('Updated');
  }
}


</script>

<style scoped>

</style>
