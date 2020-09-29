const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    add(amount) {
      this.counter += amount;
    },
    reduce(amount) {
      this.counter -= amount;
    },
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    confirmName() {
      this.confirmedName = this.name;
    },
    submitForm() {
      console.log('Submitted');
    }
  }
});

app.mount('#events');
