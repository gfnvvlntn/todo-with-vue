<template>
  <div
    class="app"
    :style="{ 'background-image': 'url(' + require('./assets/bg.svg') + ')' }"
  >
    <router-link to="/">
      <img src="./assets/icons/chevron_left_white_24dp.svg" alt="left" />
    </router-link>
    <router-view
      class="notes"
      :notes="notes"
      @createNote="createNote"
      @deleteNote="deleteNote"
      @saveNote="saveNote"
    />
  </div>
</template>
<script>
import LocalStorageDB from "./LocalStorageDB";

const db = new LocalStorageDB();
export default {
  data() {
    return {
      notes: [],
      numberOfItemsToDisplayTodos: 3,
    };
  },
  provide() {
    return {
      numberOfItemsToDisplayTodos: this.numberOfItemsToDisplayTodos,
    };
  },
  created() {
    if (db.fetch("notes") === undefined || db.fetch("notes") === null) {
      db.save([], "notes");
    }
  },
  mounted() {
    this.notes = db.fetch("notes");
  },

  methods: {
    deleteNote(id) {
      this.notes = this.notes.filter((note) => note.id !== id);
      db.save(this.notes, "notes");
    },
    createNote(newNoteItem) {
      this.notes.push(newNoteItem);
      db.save(this.notes, "notes");
    },

    saveNote(editedNote) {
      this.notes.forEach((note) => {
        if (note.id === editedNote.id) {
          note.title = editedNote.title;
          note.todos = editedNote.todos;
        }
      });
      db.save(this.notes, "notes");
    },
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  font-family: "Montserrat", sans-serif;
}

li {
  list-style: none;
}

body {
  background-color: #001220;
}

.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: white;
  min-height: 80vh;
  background-attachment: fixed;
  margin-bottom: 100px;
}

.notes {
  width: max(30%, 500px);
  max-width: 100%;
  padding: 0 16px;
  margin: 0 auto;
}
</style>
