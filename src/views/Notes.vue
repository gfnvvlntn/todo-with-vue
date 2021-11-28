<template>
  <div class="notes">
    <create-note @createNote="createNote" />
    <note-list v-if="notes" :notes="notes" @deleteNote="deleteNote" />
    <div v-else><h3>add some note...</h3></div>
  </div>
</template>
<script>
import NoteList from "../components/NoteList/NoteList";
import CreateNote from "../components/CreateNote/CreateNote";

export default {
  name: "Notes",

  components: { CreateNote, NoteList },
  props: {
    notes: {
      type: Array,
    },
  },

  emits: ["createNote", "deleteNote"],
  methods: {
    createNote(value) {
      this.$emit("createNote", value);
    },
    deleteNote(id) {
      this.$emit("deleteNote", id);
    },
  },
};
</script>
<style scoped>
.notes {
  padding-top: 50px;
}
</style>
