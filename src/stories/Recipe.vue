<template>
  <v-card max-width="344" :id="recipe.id">
    <v-img :src="recipe.imageUrl" height="194px"></v-img>
    <v-card-title>{{ recipe.title }}</v-card-title>
    <v-card-subtitle>{{ recipe.description }}</v-card-subtitle>
    <v-card-text>
      <v-row>
        <v-col cols="9">Prep time: {{ recipe.duration }}</v-col>
        <v-col cols="3">
          <v-btn icon @click="toggleFavorite">
            <v-icon>
              {{ recipe.isFavorite ? 'mdi-star' : 'mdi-star-outline' }}
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { reactive } from 'vue';

export default {
  name: 'RecipeCard',
  props: {
    recipe: {
      type: Object,
      required: true,
      default: () => ({ id: '', imageUrl: '', title: '', description: '', duration: '', isFavorite: false }),
    },
  },
  emits: ['toggle-fave'],

  setup(props, {emit}) {
    props = reactive(props);
    return {
      toggleFavorite() {
        emit('toggle-fave', !props.recipe.isFavorite);
      }
    }
  }
};
</script>
