<template>
  <div class="edit__note">
    <div class="edit__title">
      <p>Edit page</p>
    </div>
    <edit-note-title
      @editNoteTitle="editNoteTitle"
      :noteTitle="copyNote.title"
    />
    <edit-todo
      :todos="copyNote.todos"
      class="edit__todo"
      @selectTodoItem="selectTodoItem"
      @deleteTodoItem="deleteTodoItem"
      @editTodoTitle="editTodoTitle"
    />
    <create-todo-form @createTodo="createTodoItem" />
    <div class="edit__note__btn">
      <button-custom
        variant="small"
        @click="prevChanges"
        :disabled="!historyPosition"
      >
        <img src="../../assets/icons/chevron_left_white_24dp.svg" alt="left" />
      </button-custom>
      <button-custom variant="small" @click="nextChanges">
        <img
          src="../../assets/icons/chevron_right_white_24dp.svg"
          alt="right"
        />
      </button-custom>
    </div>
    <div class="edit__note__btn">
      <button-custom variant="normal" @click="saveChanges">SAVE </button-custom>
      <close-edit-page @cancelChanges="cancelChanges" />
      <button-custom variant="normal" @click="visibilityMixin"
        >DELETE
      </button-custom>
    </div>
    <modal-custom v-model:show="visibility">
      <delete-note-item
        @deleteNote="deleteNote"
        @visibilityMixin="visibilityMixin"
      />
    </modal-custom>
  </div>
</template>
<script>
import EditTodo from "./EditTodo/EditTodo";
import CreateTodoForm from "../CreateNote/CreateTodoForm/CreateTodoForm";
import EditNoteTitle from "./EditNoteTitle/EditNoteTitle";
import DeleteNoteItem from "../NoteList/NoteItem/DeleteNoteItem";
import CloseEditPage from "./CloseEditPage";
import { visibilityMixin } from "../../mixins/visibilityMixin";
import { historyChanges } from "../../mixins/historyChanges";

export default {
  components: {
    CloseEditPage,
    DeleteNoteItem,
    EditNoteTitle,
    CreateTodoForm,
    EditTodo,
  },
  mixins: [visibilityMixin, historyChanges],
  props: {
    note: {
      type: Object,
    },
  },
  data() {
    return {
      copyNote: Object.assign({}, this.note, {
        todos: this.copyTodos(this.note.todos),
      }),
    };
  },
  emits: ["deleteNote", "saveNote"],
  methods: {
    copyTodos(value) {
      return value.map((el) => ({ ...el }));
    },

    deleteNote() {
      this.$emit("deleteNote", this.note.id);
      this.$router.push({ path: "/" });
      this.visibilityMixin();
    },
    editNoteTitle(newNoteTitle) {
      this.copyNote.title = newNoteTitle;
    },

    selectTodoItem(id, isChecked) {
      this.copyNote.todos.forEach((todo) => {
        if (todo.id === id) todo.isDone = isChecked;
      });
    },
    deleteTodoItem(id) {
      this.copyNote.todos = this.copyNote.todos.filter(
        (todo) => todo.id !== id
      );
    },
    editTodoTitle(id, newTodoTitle) {
      this.copyNote.todos.forEach((todo) => {
        if (todo.id === id) todo.title = newTodoTitle;
      });
    },
    createTodoItem(newTodoItem) {
      this.copyNote.todos.push(newTodoItem);
    },
  },
};
</script>
<style scoped>
.edit__title {
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
}

.edit__todo {
  margin: 20px 0 15px 0;
}

.edit__note {
  padding: 20px;
}

.edit__note__btn {
  display: flex;
  gap: 20px;
  margin-top: 20px;
  justify-content: flex-end;
}
</style>
