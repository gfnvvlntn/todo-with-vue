<template>
  <div>
    <div class="create-title">
      <p>Create new note</p>
      <button-custom variant="small" @click="visibilityMixin">
        <img src="../../assets/icons/add_white_24dp.svg" alt="add" />
      </button-custom>
    </div>
    <modal-custom v-model:show="visibility">
      <create-note-form @createNote="createNote" />
    </modal-custom>
  </div>
</template>
<script>
import CreateNoteForm from "./CreateNoteForm/CreateNoteForm";
import { visibilityMixin } from "../../mixins/visibilityMixin";

export default {
  components: { CreateNoteForm },
  mixins: [visibilityMixin],
  emits: ["createNote"],
  methods: {
    createNote(value) {
      this.$emit("createNote", value);
      this.visibilityMixin();
    },
  },
};
</script>
<style scoped>
.create-title {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
  margin-bottom: 20px;
  background: rgba(6, 6, 6, 0.25);
  backdrop-filter: blur(2px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
</style>
