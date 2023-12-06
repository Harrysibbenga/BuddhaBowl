import RecipeCard from './Recipe.vue';

import { action } from '@storybook/addon-actions';

export default {
  title: 'Recipe',
  tags: ['autodocs'],
  component: RecipeCard,
  argTypes: {
    onToggleFavorite: {}
  },
};

export const actionsData = {
  onToggleFavorite: action('toggle-fave')
};

export const Default = {
    args: {
      recipe: {
        id: '1',
        title: 'Recipe Title',
        description: 'Recipe Description',
        imageUrl: 'image-url.jpg',
        duration: '30 mins',
        isFavorite: false
      }
  }
}

export const IsFavorite = {
  args: {
    ...Default.args,
    recipe: {
      ...Default.args.recipe,
      isFavorite: true
    }
  }
}
