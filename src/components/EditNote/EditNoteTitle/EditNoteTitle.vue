<template>
  <div class="edit__note__line">
    <input-custom v-model="newNoteTitle" @blur="onEditNoteTitle" />
    <img src="../../../assets/icons/edit_white_24dp.svg" alt="edit" />
  </div>
</template>
<script>
export default {
  props: {
    noteTitle: {
      type: String,
    },
  },
  emits: ["editNoteTitle"],
  data() {
    return {
      newNoteTitle: this.noteTitle,
    };
  },

  methods: {
    onEditNoteTitle() {
      this.$emit("editNoteTitle", this.newNoteTitle);
    },
  },
  watch: {
    noteTitle: function (propValue) {
      this.newNoteTitle = propValue;
    },
  },
};
</script>
<style scoped>
.edit__note__line {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.edit__note__line::before {
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
