
import RecipeList from './RecipeList.vue';

import * as RecipeStories from './Recipe.stories';

export default {
  component: RecipeList,
  title: 'RecipeList',
  tags: ['autodocs'],
  argTypes: {
    onToggleFavorite: {},
  },

};

export const Default = {
  args: {
    // Shaping the stories through args composition.
    // The data was inherited from the Default story in recipe.stories.js.
    recipes: [
      { ...RecipeStories.Default.args.recipe, id: '1', title: 'recipe 1', description: 'Recipe Description', imageUrl: 'image-url.jpg', duration: '30min', isFavorite: false},
      { ...RecipeStories.Default.args.recipe, id: '2', title: 'recipe 2', description: 'Recipe Description', imageUrl: 'image-url.jpg', duration: '30min', isFavorite: false},
      { ...RecipeStories.Default.args.recipe, id: '3', title: 'recipe 3', description: 'Recipe Description', imageUrl: 'image-url.jpg', duration: '30min', isFavorite: false},
      { ...RecipeStories.Default.args.recipe, id: '4', title: 'recipe 4', description: 'Recipe Description', imageUrl: 'image-url.jpg', duration: '30min', isFavorite: false},
      { ...RecipeStories.Default.args.recipe, id: '5', title: 'recipe 5', description: 'Recipe Description', imageUrl: 'image-url.jpg', duration: '30min', isFavorite: false},
      { ...RecipeStories.Default.args.recipe, id: '6', title: 'recipe 6', description: 'Recipe Description', imageUrl: 'image-url.jpg', duration: '30min', isFavorite: false}
    ],
  },
};

export const WithFavoriteRecipes = {
  args: {
    // Shaping the stories through args composition.
    // Inherited data coming from the Default story.
    recipes: [
      ...Default.args.recipes.slice(0, 5),
      { id: '6', title: 'recipe 6 (favorite)', description: 'Recipe Description', imageUrl: 'image-url.jpg', duration: '30min', isFavorite: true},
    ],
  },
};

export const Loading = {
  args: {
    recipes: [],
    loading: true,
  },
};

export const Empty = {
  args: {
    ...Loading.args,
    loading: false,
  },
};
