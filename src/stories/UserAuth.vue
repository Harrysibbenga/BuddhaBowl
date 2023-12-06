<template>
    <v-container class="front-page" fluid>
      <v-row justify="center" align="center">
        <v-col cols="12" sm="8" md="6" class="text-center">
          <h1>Login</h1>
          <MyButton label="Login" color="primary" />
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import MyButton from './Button.vue';

export default {
  name: 'UserAuth',
  componets: {MyButton},
  props: {
    register: { type: Boolean, default: false },
    loggedIn: { type: Boolean, default: false },
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
