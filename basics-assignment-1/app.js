const app = Vue.createApp({
  data() {
    return {
      name : 'Natalio',
      age : 31,
      randomNum: Math.random(),
      imageUrl : 'https://media.istockphoto.com/photos/aerial-view-of-tokyo-cityscape-with-fuji-mountain-in-japan-picture-id1131743616',

    }
  },
  methods : {
    randomNumber() {
      return Math.random();
    }
  }
});

app.mount('#assignment');
