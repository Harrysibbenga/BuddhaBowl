<template>
  <div class="fill-height">
    <template v-if="loading">
      <v-container class="fill-height no-recipe-screen">
        <v-row justify="space" align="center" class="fill-height" >
          <v-col cols="12" class="text-center fill-height d-flex flex-column justify-space-between">
            <h2 class="text-white">Buddha Bowl</h2>
            <v-btn color="#05caca" size="x-large" class="loading-btn" loading icon></v-btn>
            <!-- <v-img max-height="60vh" width="75vw" class='mx-auto' src="../assets/imgs/bg.png"></v-img> -->
          </v-col>
        </v-row>
      </v-container>
    </template>

    <template v-else-if="isEmpty">
      <v-container class="fill-height no-recipe-screen">
        <v-row justify="space" align="center" class="fill-height" >
          <v-col cols="12" class="text-center fill-height d-flex flex-column justify-space-between">
            <h2 class="text-white">No Recipes</h2>
            <v-img max-height="60vh" width="75vw" class='mx-auto' src="../assets/imgs/bg.png"></v-img>
            <v-btn color="blue" large class="mt-5">
              Create Recipe
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </template>


    <template v-else>
      <div class="d-flex flex-column align-stretch">
        <Recipe
          v-for="recipe in recipesInOrder"
          :key="recipe.id"
          :recipe="recipe"
          class="mb-2"
          @toggle-fave="onToggleFavorite"
        />
      </div>
    </template>
  </div>
</template>

<script>
import Recipe from './Recipe.vue';
import { reactive, computed } from 'vue';

export default {
  name: 'RecipeList',
  components: { Recipe },
  props: {
    recipes: { type: Array, required: true, default: () => [] },
    loading: { type: Boolean, default: false },
  },
  emits: ['toggle-fave'],

  setup(props, {emit}) {
    props = reactive(props);
    return {
      isEmpty: computed(() => props.recipes.length === 0),
      recipesInOrder:computed(()=>{
        return [
          ...props.recipes.filter(r => r.isFavorite === true),
          ...props.recipes.filter(r => r.isFavorite === false),
        ]
      }),
      /**
       * Event handler for toggeling favorite recipe
       */
      onToggleFavorite() {
        emit('toggle-fave');
      },
    };
  },
};
</script>


<style scoped>
.no-recipe-screen {
  background-color: #05caca;
}
.loading-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
