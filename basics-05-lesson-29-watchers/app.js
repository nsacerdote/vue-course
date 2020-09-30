const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastname: ''
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    }
  },
  computed: {
    fullname() {
      return `${this.name} ${this.lastname}`;
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
