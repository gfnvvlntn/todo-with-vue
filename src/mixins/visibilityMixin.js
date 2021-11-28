export const visibilityMixin = {
  data() {
    return {
      visibility: false,
    };
  },
  methods: {
    visibilityMixin() {
      this.visibility = !this.visibility;
    },
  },
};
