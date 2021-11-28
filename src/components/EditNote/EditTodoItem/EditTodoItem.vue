<template>
  <li>
    <div class="edit__todo_item">
      <input
        type="checkbox"
        @change="onSelectTodoItem"
        v-model="editTodoIsDone"
      />
      <input-custom v-model="editTodoTitle" @blur="onEditTodoTitle()" />
      <button-custom variant="edit-todo" @click="onDeleteTodoItem()">
        <img src="../../../assets/icons/delete_white_24dp.svg" alt="add" />
      </button-custom>
    </div>
  </li>
</template>
<script>
export default {
  props: {
    todoItemId: {
      type: Number,
    },
    todoItemTitle: {
      type: String,
    },
    todoItemIsDone: {
      type: Boolean,
    },
  },
  emits: ["selectTodoItem", "deleteTodoItem", "editTodoTitle"],
  data() {
    return {
      editTodoIsDone: this.todoItemIsDone,
      editTodoTitle: this.todoItemTitle,
    };
  },

  methods: {
    onSelectTodoItem() {
      this.$emit("selectTodoItem", this.todoItemId, this.editTodoIsDone);
    },
    onDeleteTodoItem() {
      this.$emit("deleteTodoItem", this.todoItemId);
    },
    onEditTodoTitle() {
      this.$emit("editTodoTitle", this.todoItemId, this.editTodoTitle);
    },
  },
  watch: {
    todoItemTitle: function (propValue) {
      this.editTodoTitle = propValue;
    },
    todoItemIsDone: function (propValue) {
      this.editTodoIsDone = propValue;
    },
  },
};
</script>
<style>
.edit__todo_item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  height: 40px;
  padding: 10px;
  border: 1px solid white;
  border-radius: 10px;
  margin: 10px 0;
}
</style>
