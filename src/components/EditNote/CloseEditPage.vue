<template>
  <div class="close_edit_page">
    <button-custom variant="normal" @click="visibilityMixin">
      CANCEL
    </button-custom>
    <modal-custom v-model:show="visibility">
      <div class="modal__window">
        <p>Are you sure?</p>
        <button-custom variant="normal" @click="onCancelChanges"
          >OK
        </button-custom>
        <button-custom variant="normal" @click="visibilityMixin"
          >CANCEL
        </button-custom>
      </div>
    </modal-custom>
  </div>
</template>
<script>
import { visibilityMixin } from "../../mixins/visibilityMixin";

export default {
  mixins: [visibilityMixin],
  emits: ["cancelChanges"],
  methods: {
    onCancelChanges() {
      this.$emit("cancelChanges");
    },
  },
};
</script>
<style scoped>
.modal__window {
  padding: 40px;
  color: white;
  display: flex;
  align-items: center;
  gap: 30px;
}
</style>
