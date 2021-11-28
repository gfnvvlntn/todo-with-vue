<template>
  <ul>
    <note-item
      v-for="note in notes"
      :note="note"
      :key="note.id"
      @deleteNote="deleteNote"
    />
  </ul>
</template>
<script>
import NoteItem from "./NoteItem/NoteItem";

export default {
  components: { NoteItem },
  props: {
    notes: {
      type: Array,
    },
  },
  emits: ["deleteNote"],
  methods: {
    deleteNote(id) {
      this.$emit("deleteNote", id);
    },
  },
};
</script>
<style></style>
