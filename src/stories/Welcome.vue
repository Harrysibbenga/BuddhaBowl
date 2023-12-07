<template>
    <v-container fluid class="bg-welcome fill-height">
      <v-row justify="center" align="center" class="fill-height">
        <v-col cols="12" class="text-center d-flex flex-column justify-space-between fill-height">
          <h1 :class="textColor">Welcome to the Buddha Bowl App!</h1>
          <v-img max-height="60vh" width="75vw" class='mx-auto' src="../assets/imgs/buddha-welcome1.png"></v-img>
          <MyButton label="View Recipes" color="accent" />
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import MyButton from './Button.vue';

export default {
  name: 'WelcomePage',
  components: {MyButton},
  props: {
    gradientStart: {
      type: String,
      default: '#ffffff',
    },
    gradientEnd: {
      type: String,
      default: '#e7d6b7',
    },
    textColor: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.bg-welcome {
  height: 100vh;
  background: rgb(231,214,183);
  background: radial-gradient(circle, rgba(231,214,183,0.38137261740633754) 0%, rgba(231,214,183,1) 74%);
}
</style>
