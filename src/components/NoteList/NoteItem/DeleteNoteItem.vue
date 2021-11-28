<template>
  <div class="delete__note">
    <p>Do you want to delete a note</p>
    <div class="delete__note__btn">
      <button-custom variant="normal" @click="onDeleteNote">YES</button-custom>
      <button-custom variant="normal" @click="onvisibilityMixin">
        CANCEL
      </button-custom>
    </div>
  </div>
</template>
<script>
export default {
  emits: ["deleteNote", "visibilityMixin"],
  methods: {
    onvisibilityMixin() {
      this.$emit("visibilityMixin");
    },

    onDeleteNote() {
      this.$emit("deleteNote");
    },
  },
};
</script>
<style>
.delete__note {
  width: 300px;
  display: flex;
  gap: 30px;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
}

.delete__note::before {
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

.delete__note__btn {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}
</style>
