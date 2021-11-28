<template>
  <div class="edit">
    <div class="edit__list">
      <edit-note
        v-if="note"
        :note="note"
        @deleteNote="deleteNote"
        @saveNote="saveNote"
      />
      <div class="edit__error" v-else>
        <h3>Not note for edit</h3>
        <router-link to="/"
          ><button-custom variant="normal">Home</button-custom>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import EditNote from "../components/EditNote/EditNote";
import LocalStorageDB from "../LocalStorageDB";
const db = new LocalStorageDB();
export default {
  components: { EditNote },
  created() {
    this.note = db.getById(+this.$route.params.id, "notes");
  },
  data() {
    return {
      note: {},
    };
  },
  emits: ["deleteNote", "saveNote"],
  methods: {
    deleteNote(id) {
      this.$emit("deleteNote", id);
    },
    saveNote(editedNote) {
      this.$emit("saveNote", editedNote);
    },
  },
};
</script>
<style scoped>
.edit {
  height: 100vh;
  padding-top: 50px;
}

.edit__list {
  background: rgba(6, 6, 6, 0.25);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.edit__error {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
}
</style>
