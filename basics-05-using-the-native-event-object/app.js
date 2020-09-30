const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  computed: {
    fullname() {
      return this.name ? this.name + ' Lastname' : '';
    }
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    reset() {
      this.name = '';
    }
  }
});

app.mount('#events');
