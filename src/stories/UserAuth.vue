<template>
    <v-container fluid>
      <template v-if="user.loggedIn">
        <RecipeList
          :recipes="user.recipeList"
        />
      </template>

      <template v-else-if="register">
        <v-row justify="center" align="center">
          <v-col cols="12" sm="8" md="6" class="text-center">
            <h1>Register</h1>
            <MyButton label="Register" color="primary" />
          </v-col>
        </v-row>
      </template>

      <template v-else>
        <v-row justify="center" align="center">
          <v-col cols="12" sm="8" md="6" class="text-center">
            <h1>Login</h1>
            <MyButton label="Login" color="primary" />
          </v-col>
        </v-row>
      </template>
    </v-container>
</template>

<script>
import MyButton from './Button.vue';
import RecipeList from './RecipeList.vue';

export default {
  name: 'UserAuth',
  components: {MyButton, RecipeList},
  props: {
    register: { type: Boolean, default: false },
    user: {
      type: Object,
      default: () => ({ id: '', imageUrl: '', name: '', recipeList: '', loggedIn: false }),
    },
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
