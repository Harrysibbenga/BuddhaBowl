
import UserAuth from './UserAuth.vue';

import * as RecipeListStories from './RecipeList.stories';

export default {
  component: UserAuth,
  title: 'Pages/UserAuth',
  tags: ['autodocs'],
};

export const Default = {
  args: {
    user: {
      id: '',
      name: '',
      loggedIn: false,
      imageUrl: '',
      recipeList: []
    }
  }
}

export const LoginPage = {
  args: {
    register: false,
    user: {
      ...Default.args.user
    },
  },
};

export const ResisterPage = {
  args: {
    register: true,
    user: {
      ...Default.args.user
    },
  },
};

export const Recipes = {
  args: {
    register: false,
    user: {
      id: '1',
      name: 'Harry Sibbenga',
      loggedIn: true,
      imageUrl: 'image.jpg',
      recipeList: [
        ...RecipeListStories.Default.args.recipes
      ]
    }
  },
};
