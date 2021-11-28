<template>
  <div class="create__form" @keypress.enter="onCreateNote">
    <p>Create note</p>

    <div class="create__form__title">
      <input-custom placeholder="enter note name..." v-model="note" />
      <img src="../../../assets/icons/edit_white_24dp.svg" alt="edit" />
    </div>
    <p>Create todo</p>
    <create-todo-form @createTodo="createTodo" />
    <todo-list :todos="todos" />
    <button-custom
      type="submit"
      class="btn"
      variant="normal"
      @click="onCreateNote"
    >
      CREATE
    </button-custom>
  </div>
</template>
<script>
import CreateTodoForm from "../CreateTodoForm/CreateTodoForm";
import TodoList from "../../TodoList/TodoList";

export default {
  name: "create-note-form",
  components: { TodoList, CreateTodoForm },
  data() {
    return {
      note: "",
      todos: [],
    };
  },
  emits: ["createNote"],
  methods: {
    onCreateNote() {
      if (!this.note) return;
      if (this.todos.length === 0) return;
      this.$emit("createNote", {
        id: new Date().getTime(),
        title: this.note,
        todos: this.todos,
      });
    },
    createTodo(todoItem) {
      this.todos.unshift(todoItem);
    },
  },
};
</script>
<style scoped>
.create__form {
  width: 400px;
  min-height: 450px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
}

.create__form__title {
  position: relative;
  padding: 10px;
  display: flex;
  justify-content: space-between;
}

.create__form__title::before {
  content: "";
  position: absolute;
  top: -2px;
  bottom: -2px;
  left: -2px;
  right: -2px;
  background: linear-gradient(35deg, #fa7268, #c62368);
  border-radius: 10px;
  z-index: -1;
}

p {
  width: 100%;
  height: 50px;
  color: white;
  display: flex;
  align-items: center;
}

.btn {
  align-self: flex-end;
}
</style>
