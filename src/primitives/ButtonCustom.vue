<template>
  <button :class="variant">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "button-custom",
  props: {
    variant: {
      type: String,
    },
  },
};
</script>
<style scoped>
button {
  font-family: "Roboto", sans-serif;
  border: none;
  outline: none;
  background-color: initial;
  color: white;
  cursor: pointer;
  transition: all 0.1s;
}

button:active {
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transform: translateY(1px);
}

.small {
  font-size: 18px;
}

.normal {
  padding: 1em 2em;
  border: 1px solid white;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}
</style>
