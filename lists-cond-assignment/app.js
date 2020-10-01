const app = Vue.createApp({
  data() {
    return {
      task : '',
      tasks : [],
      showList : true
    };
  },
  computed: {
    toggleLabel() {
      return this.showList ? 'Hide List' : 'Show List';
    }
  },
  methods : {
    addTask() {
      this.tasks.push(this.task);
    },
    toggleList() {
      this.showList = !this.showList;
    }
  }
});

app.mount('#assignment');
