<template>
  <div class="create__todo">
    <input-custom placeholder="create new todo..." v-model="todo" />
    <button-custom variant="edit-todo" @click="addTodo">
      <div class="plus">
        <img src="../../../assets/icons/add_white_24dp.svg" alt="add" />
      </div>
    </button-custom>
  </div>
</template>
<script>
export default {
  name: "create-todo-form",
  data() {
    return {
      todo: "",
    };
  },
  emits: ["createTodo"],
  methods: {
    addTodo() {
      if (!this.todo) return;
      this.$emit("createTodo", {
        id: new Date().getTime(),
        title: this.todo,
        isDone: false,
      });
      this.todo = "";
    },
  },
};
</script>
<style scoped>
.create__todo {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  color: white;
  border-radius: 10px;
  margin-top: 20px;
}

.create__todo::before {
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
</style>
