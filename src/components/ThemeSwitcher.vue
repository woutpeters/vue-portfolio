<template>
  <a href="#" @click.prevent="toggleTheme" aria-label="Theme Switcher">
    <i v-if="theme === 'light'" data-feather="moon" class="h-5 w-5"></i>
    <i v-else data-feather="sun" class="h-5 w-5"></i>
  </a>
</template>

<script>
export default {
  props: {
    theme: {
      type: String,
      required: true,
    },
  },
  methods: {
    toggleTheme() {
      const newTheme = this.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      this.$emit('themeChanged', newTheme);
      this.$router.go();
    },
  },
};
</script>

<style scoped></style>