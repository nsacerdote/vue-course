const app = Vue.createApp({
  data() {
    return {
      userClass: '',
      bgColor: '',
      hidden : false,
    };
  },
  methods: {
    toggle() {
      this.hidden = !this.hidden;
    }
  }
});
app.mount('#assignment');
