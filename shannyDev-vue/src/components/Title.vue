<script setup>
defineProps({
  title: {
    type: String,
  },
})
</script>
<template>
  <div class="title">
    {{ title }}
  </div>
</template>
<style lang="scss" scoped>
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
  font-weight: bold;
  color: var(--my-title);
  margin-top: 10vh;
  text-shadow: 0.3rem 0.3rem 0 var(--my-title_shadow);
}
</style>
