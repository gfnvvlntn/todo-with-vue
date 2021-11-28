<template>
  <li>
    <div class="todo-item">
      <p
        class="todo-title"
        :style="todo.isDone ? 'text-decoration: line-through;' : ''"
      >
        {{ todo.title }}
      </p>
      <span v-if="todo.isDone">
        <img src="../../../assets/icons/done_white_24dp.svg" alt="done" />
      </span>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
    },
  },
};
</script>
<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 40px;
  padding: 10px;
  margin: 10px 0;
}

.todo-title {
  width: calc(100% - 16px);
}
</style>
