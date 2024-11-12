<!-- src/App.vue -->
<template>
  <router-view></router-view>
</template>


<script>
import { provideCart } from './pages/CartContect.vue'; // Make sure the path is correct

export default {
  name: "App",
  setup() {
    provideCart(); 
  },
};
</script>
