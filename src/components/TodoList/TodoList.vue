<template>
  <ul>
    <todo-item v-for="todo in todos" :key="todo.id" :todo="todo" />
  </ul>
</template>
<script>
import TodoItem from "./TodoItem/TodoItem";

export default {
  components: { TodoItem },
  props: {
    todos: {
      type: Array,
    },
  },
};
</script>
<style scoped>
ul {
  width: 100%;
  max-height: 30vh;
  overflow: auto;
}
</style>
