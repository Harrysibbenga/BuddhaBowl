<template>
  <v-container class="loading-screen" fluid>
    <v-progress-circular indeterminate color="primary"></v-progress-circular>
  </v-container>
</template>

<script>
export default {
  name: 'LoadingScreen'
}
</script>

<style scoped>
.loading-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0; /* Adjust the color as needed */
}
</style>
