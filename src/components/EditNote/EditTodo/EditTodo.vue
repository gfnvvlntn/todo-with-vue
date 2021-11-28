<template>
  <ul>
    <edit-todo-item
      v-for="todoItem in todos"
      :key="todoItem.id"
      :todoItemId="todoItem.id"
      :todoItemIsDone="todoItem.isDone"
      :todoItemTitle="todoItem.title"
      @selectTodoItem="selectTodoItem"
      @deleteTodoItem="deleteTodoItem"
      @editTodoTitle="editTodoTitle"
    />
  </ul>
</template>
<script>
import EditTodoItem from "../EditTodoItem/EditTodoItem";

export default {
  components: { EditTodoItem },
  props: {
    todos: {},
  },
  emits: ["selectTodoItem", "deleteTodoItem", "editTodoTitle"],
  methods: {
    selectTodoItem(id, checked) {
      this.$emit("selectTodoItem", id, checked);
    },
    deleteTodoItem(id) {
      this.$emit("deleteTodoItem", id);
    },
    editTodoTitle(id, newTodoTitle) {
      this.$emit("editTodoTitle", id, newTodoTitle);
    },
  },
};
</script>
