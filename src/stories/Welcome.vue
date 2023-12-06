<template>
  <v-container class="front-page" fluid>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6" class="text-center">
        <h1>Welcome to My Buddha Bowl App!</h1>
        <v-btn color="green" dark large class="mt-5" @click="startBuilding">
          Start Building
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'FrontPage',
  methods: {
    startBuilding() {
      // Handle the start building action
    }
  }
}
</script>

<style scoped>
.front-page {
  background-image: url('/path-to-your-background-image.jpg');
  background-size: cover;
  background-position: center;
}
</style>
