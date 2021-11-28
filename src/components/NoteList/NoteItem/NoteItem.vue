<template>
  <div class="note">
    <div class="note__header">
      <p class="note-title">{{ note.title }}</p>
      <div class="note__header__icon">
        <button-custom variant="small" @click="goToEditPage">
          <img src="../../../assets/icons/edit_white_24dp.svg" alt="edit" />
        </button-custom>
        <button-custom variant="small" @click="visibilityMixin">
          <img src="../../../assets/icons/delete_white_24dp.svg" alt="delete" />
        </button-custom>
      </div>
    </div>
    <todo-list :todos="outputSomeElementsTodo" />
  </div>
  <modal-custom v-model:show="visibility">
    <delete-note-item
      @deleteNote="deleteNote"
      @visibilityMixin="visibilityMixin"
    />
  </modal-custom>
</template>
<script>
import TodoList from "../../TodoList/TodoList";
import DeleteNoteItem from "./DeleteNoteItem";
import { visibilityMixin } from "../../../mixins/visibilityMixin";

export default {
  components: { DeleteNoteItem, TodoList },
  mixins: [visibilityMixin],

  props: {
    note: {
      type: Object,
    },
  },
  inject: ["numberOfItemsToDisplayTodos"],
  emits: ["deleteNote", "goToEditingNote"],
  computed: {
    outputSomeElementsTodo() {
      return this.note.todos.slice(0, this.numberOfItemsToDisplayTodos);
    },
  },

  methods: {
    deleteNote() {
      this.$emit("deleteNote", this.note.id);
    },
    goToEditPage() {
      this.$router.push("/edit/" + this.note.id);
    },
  },
};
</script>
<style scoped>
img {
  width: 20px;
  height: 20px;
}

.note__header {
  width: 100%;
  color: #fa7268;
  background-color: #001220;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
}

.note__header__icon {
  width: 50px;
  display: flex;
  justify-content: space-between;
}

.note-title {
  overflow: hidden;
  margin-right: 10px;
}

.note {
  margin-top: 20px;
  color: white;

  background: rgba(6, 6, 6, 0.25);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(2px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
</style>
