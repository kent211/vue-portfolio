<template>
  <div id="app">
    <NavbarComponent />
    <HomeComponent />
  </div>
</template>

<script>
import NavbarComponent from './components/Navbar.vue'
import HomeComponent from './components/Home.vue'

export default {
  name: 'App',
  components: {
    NavbarComponent,
    HomeComponent
  }
}
</script>

<style>
body {
  background-color: #1c1c1c;
  color: white;
  font-family: 'Arial', sans-serif;
  margin: 0;
}
</style>
