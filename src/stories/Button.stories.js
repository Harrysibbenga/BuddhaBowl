import MyButton from './Button.vue';

export default {
  title: 'Components/Buttons',
  component: MyButton,
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'select', options: ['primary', 'secondary','accent','error','info','success','warning','black','white'] },
    size: { control: 'select', options: ['x-small', 'small', 'default', 'large','x-large'] },
    disabled: { control: 'boolean' },
    appendIcon: { control: 'text' },
    prependIcon: { control: 'text' },
    variant: { control: 'select', options: ['text' , 'flat' , 'elevated' , 'tonal' , 'outlined' , 'plain'] },
    loading: Boolean,
    tile: { control: 'boolean' },
    flat: { control: 'boolean' },
    rounded: { control: 'boolean' },
    gradientStart: { control: 'color' },
    gradientEnd: { control: 'color' }
  },
};

export const Primary = {
  args: {
    label: 'Button',
    color: 'primary',
  },
};

export const ViewRecipes = {
  args: {
    label: 'View Recipes',
    color: 'primary',
  },
};

export const CreateRecipes = {
  args: {
    label: 'Create Recipe',
    color: 'white',
    gradientStart: '#ffffff',
    gradientEnd: '#e7eada',
  },
};

export const Login = {
  args: {
    label: 'Login',
    color: 'primary',
  },
};
