<template>
  <v-btn class="custom-button v-btn" @click="onClick" :color="color" :size="size" :disabled="disabled" :appendIcon="appendIcon" :prependIcon="prependIcon" :variant="variant" :tile="tile" :rounded="rounded">{{ label }}</v-btn>
</template>

<script>
import { reactive } from 'vue';

export default {
  name: 'MyButton',

  props: {
    label: {
      type: String,
      required: true,
    },
    color: String,
    size: String,
    disabled: Boolean,
    appendIcon: String,
    prependIcon: String,
    variant: String,
    loading: Boolean,
    tile: Boolean,
    flat: Boolean,
    rounded: Boolean,
    gradientStart: {
      type: String,
      default: '#00dabd',
    },
    gradientEnd: {
      type: String,
      default: '#03bfab',
    }
  },

  emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props);
    return {
      onClick() {
        emit('click');
      },
    };
  },
};
</script>

<style scoped>
.custom-button {
  background: linear-gradient(to bottom, v-bind(gradientStart), v-bind(gradientEnd));
  border: none;
  border-radius: 25px; /* Adjust as necessary */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Example shadow */
  cursor: pointer;
  transition: transform 0.1s ease-in-out;
}

.custom-button:hover {
  transform: scale(1.05);
}

.custom-button:active {
  transform: scale(0.95);
}
</style>

