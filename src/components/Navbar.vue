<template>
  <v-app-bar app color="#111111" dark flat>
    <v-btn icon>
      <v-icon color="#A7121D" font="Arial">ꓘſ</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn text>Home</v-btn>
    <v-btn text>Projects</v-btn>
    <v-btn text>About</v-btn>
    <v-btn text>Contact</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'NavbarComponent'
}
</script>

<style scoped>
.v-app-bar {
  background-color: #030303 !important;
  color: white !important;
}
.v-btn {
  font-size: 18px;
  font-family: 'Arial', sans-serif;
  color: white !important;
  font-weight: bold;
}
.v-btn:hover {
  background-color: #555 !important;
}
.v-icon {
  color: #A7121D !important;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
  font-size: 0px;
}
.v-spacer {
  flex-grow: 1;
}
</style>
