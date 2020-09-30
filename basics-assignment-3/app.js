const app = Vue.createApp({
  data() {
    return {
      value: 0,
      resetTimer: null
    };
  },
  computed: {
    result() {
      if (this.value > 37) {
        return 'Too much!';
      } else if (this.value < 37) {
        return 'Not there yet!';
      } else {
        return this.value;
      }
    }
  },
  watch: {
    result() {
      if (this.resetTimer) {
        clearTimeout(this.resetTimer);
      }

      this.resetTimer = setTimeout(() => {
        this.value = 0;
        this.resetTimer = null;
      }, 5000);
    }
  },
  methods: {
    add(val) {
      this.value += val;
    }
  }
});

app.mount('#assignment');
