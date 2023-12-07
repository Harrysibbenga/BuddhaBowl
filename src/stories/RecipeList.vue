<template>
  <div class="fill-height">
    <template v-if="loading">
      <v-container class="fill-height no-recipe-screen" fluid>
        <v-row class="fill-height" >
          <v-col cols="12" class="text-center fill-height d-flex flex-column justify-space-between">
            <h2 class="text-white">Buddha Bowl</h2>
            <v-img class="loading-big" cover src="../assets/imgs/loading.png"></v-img>
            <v-img class="loading-img" cover src="../assets/imgs/loading.png"></v-img>
            <h2 class="text-white">Page Loading</h2>
          </v-col>
        </v-row>
      </v-container>
    </template>

    <template v-else-if="isEmpty">
      <v-container class="fill-height no-recipe-screen" fluid>
        <v-row class="fill-height" >
          <v-col cols="12" class="text-center fill-height d-flex flex-column justify-space-between">
            <h2 class="text-white">No Recipes</h2>
            <v-img max-height="60vh" width="75vw" class='mx-auto' src="../assets/imgs/bg.png"></v-img>
            <MyButton
              label="Create Recipe"
              color="white"
              gradient-start="#ffffff"
              gradient-end="#e7eada"
            />
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
import MyButton from './Button.vue';
import { reactive, computed } from 'vue';

export default {
  name: 'RecipeList',
  components: { Recipe, MyButton },
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
.loading-img, .loading-big {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0deg);
}

.loading-img {
  animation: spin 30s linear infinite;
  max-height: 60vh;
  width: 60vw;
}

.loading-big {
  animation: spin-anti 60s linear infinite;
  max-height: 100vh;
  width: 100vw;
}

@keyframes spin {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@keyframes spin-anti {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(-360deg);
  }
}
</style>
