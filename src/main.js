import { createApp } from 'vue'
import App from './App.vue'
import Vue from 'vue'
import router from './router'
import store from './store'



//import Navbar from "@/components/Navbar.vue"




//Vue.component('my-component-name', Navbar)



// bootstrap
import 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// font-awesome


// Importing the global css file
import "@/assets/css/generale.css"

// Animation les DIV in scroll
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();




createApp(App).use(store).use(router).mount('#app')

