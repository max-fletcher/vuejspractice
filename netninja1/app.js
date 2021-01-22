var vue1 = new Vue({
  el: '#vue1',
  data: {
    name: 'max',
    job: 'windowlicker',
    website: 'https://9gag.com/',
    websiteTag: '<a href="https://9gag.com/"> Website Tag </a>'
  },

  methods: {
    greet: function(time) {
      //  return time;
      return 'Good ' + time + ' ' + this.name;
    }

  }

});

var vue2 = new Vue({
  el: '#vue2',
  data: {
    age: 10,
    x: 0,
    y: 0
  },

  methods: {
    addYear: function(year) {
      this.age += year;
    },

    subtractYear: function(year) {
      this.age -= year;
    },

    updateXY: function(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },

    click: function() {
      alert('Jebaited lol');
    }

  }

});

var vue3 = new Vue({
  el: '#vue3',
  data: {
    name: '',
    age: ''

  },

  methods: {
    logName: function() {
      console.log('name');
    },

    logAge: function() {
      console.log('age');
    }

  }

});

var vue4 = new Vue({
  el: '#vue4',
  data: {
    name: '',
    age: ''

  },

  methods: {

  },
  computed: {

  }

});

var vue5 = new Vue({
  el: '#vue5',
  data: {
    a: 0,
    b: 0,
    age: 20

  },

  methods: {

  },

  computed: {
    addToA: function() {
      console.log('addToA ran');
      return this.a + this.age;
    },

    addToB: function() {
      console.log('addToB ran');
      return this.b + this.age;
    },

  }

});

var vue6 = new Vue({
  el: '#vue6',
  data: {
    available: true,
    nearby: true,
    success: true,
    error: true
  },

  methods: {

  },

  computed: {
    compClasses: function() {
      return {
        available: this.available,
        nearby: this.nearby

      }
    }
  }

});

var vue7 = new Vue({
  el: '#vue7',
  data: {
    characters: ['Mario', 'Luigi', 'Yoshi', 'Bowser'],
    ninjas: [{
        name: 'Ryu',
        age: 25
      },
      {
        name: 'Ken',
        age: 35
      },
      {
        name: 'Akuma',
        age: 55
      }
    ]
  },

  methods: {

  }

});

var vue8 = new Vue({
  el: '#vue8',
  data: {
    health: 100,
    ended: false
  },

  methods: {
    punch: function() {
      this.health -= 10;
      if (this.health <= 0) {
        this.ended = true;
      }
    },
    restart: function() {
      this.health = 100;
      this.ended = false;
    }

  },

  computed: {

  }

});

Vue.component('greeting', {
  template: '<p> Hello From {{ name }}. <button v-on:click="changename"> Change Name </button> </p>',
  data: function() {
    return {
      name: 'Yoshi'
    }
  },
  methods: {
    changename: function() {
      this.name = 'Mario';
    }
  }
});

var vue9 = new Vue({
  el: '#vue9',
  data: {
    title: 'Hello From App 1',
  },

  methods: {
    greet: function() {
      return 'Yo Boy From App 1 speaking';
    }

  },
  computed: {

  }

});

var vue10 = new Vue({
  el: '#vue10',
  data: {
    title: 'Hello From App 2',
  },

  methods: {
    greet: function() {
      return 'Greetings From App 2';
    },
    changeTitle: function() {
      vue9.title = 'Title 1 Changed form App 2 (sneaky lol) !!';
    }

  },
  computed: {

  }

});

var vue11 = new Vue({
  el: '#vue11',
  data: {
    output: 'Burger',
  },

  methods: {
      readRefs: function(){
      //read all input tag ref
      console.log(this.$refs.input.value);
      //read the innerhtml of p tag called 'name' ref
      console.log(this.$refs.name.innerText);
      this.output = this.$refs.input.value;
    }
  },

  computed: {

  }

});
