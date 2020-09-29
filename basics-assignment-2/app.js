const app = Vue.createApp({
  data() {
    return {
      output : '',
      confirmedOutput: ''
    }
  },
  methods: {
    showAlert() {
      window.alert('YEAAHHH');
    },
    setOutput(event) {
      this.output = event.target.value;
    },
    setConfirmedOutput(event) {
      this.confirmedOutput = event.target.value;
    }
  }
});

app.mount('#assignment');
