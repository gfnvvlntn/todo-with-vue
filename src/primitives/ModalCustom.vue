<template>
  <teleport to="body">
    <div v-if="show" class="modal">
      <div @click.stop class="content">
        <div class="close">
          <button-custom @click="hideModal" variant="add">
            <img src="../assets/icons/close_white_24dp.svg" alt="add" />
          </button-custom>
        </div>
        <slot></slot>
      </div>
    </div>
  </teleport>
</template>
<script>
import ButtonCustom from "./ButtonCustom";

export default {
  components: { ButtonCustom },
  name: "modal-custom",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideModal() {
      this.$emit("update:show", false);
    },
  },
};
</script>
<style scoped>
.modal {
  background-color: rgba(1, 1, 1, 1);
  color: white;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  z-index: 999;
}

.close {
  display: flex;
  justify-content: flex-end;
}

.content {
  margin: auto;
  padding: 15px;
  z-index: 1000;
  background: rgba(6, 6, 6, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(2px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
</style>
