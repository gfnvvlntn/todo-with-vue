export const historyChanges = {
  data() {
    const initialHistory = Object.assign({}, this.note, {
      todos: this.copyTodos(this.note.todos),
    });
    return {
      history: [initialHistory],
      historyPosition: 0,
    };
  },
  computed: {
    currentSnapshot() {
      return this.history[this.historyPosition];
    },
  },
  methods: {
    saveChanges() {
      const snapShot = {
        title: this.copyNote.title,
        id: this.copyNote.id,
        todos: this.copyTodos(this.copyNote.todos),
      };

      if (
        JSON.stringify(snapShot) ===
        JSON.stringify(this.history[this.history.length - 1])
      )
        return;
      this.history.push(snapShot);
      this.$emit("saveNote", snapShot);
      console.log(this.history[this.history.length - 1]);
      console.log(snapShot);
    },

    cancelChanges() {
      this.$router.push({ path: "/" });
    },
    prevChanges() {
      if (this.historyPosition > 0) {
        this.historyPosition--;
        this.copyNote = Object.assign({}, this.currentSnapshot, {
          todos: this.copyTodos(this.currentSnapshot.todos),
        });
      }
    },

    nextChanges() {
      if (this.historyPosition < this.history.length - 1) {
        this.historyPosition++;
        this.copyNote = Object.assign({}, this.currentSnapshot, {
          todos: this.copyTodos(this.currentSnapshot.todos),
        });
      }
    },
  },
};
