import { createApp } from 'vue';
// import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App.vue';
import 'vuetify/dist/vuetify.min.css';

 
// Vue.use(Vuetify);

const app = createApp(App);
app.use(Vuetify); // Assuming you want Vuetify globally available

app.mount('#app')


