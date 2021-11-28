<template>
  <input type="text" :value="modelValue" @input="updateInput" />
</template>
<script>
export default {
  name: "input-custom",
  props: {
    modelValue: {
      type: String,
      default: "",
    },
  },

  methods: {
    updateInput(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
};
</script>
<style scoped>
input {
  background-color: inherit;
  border: none;
  color: white;
  outline: none;
  font-size: 16px;
  padding: 6px;
}

::-webkit-input-placeholder {
  color: white;
  font-size: 12px;
}
</style>
