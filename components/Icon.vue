<template>
  <component :is="icon" class="icon" />
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    icon() {
      return () => import(`~/assets/svgs/${this.name}.svg?inline`)
    }
  }
}
</script>

<style lang="postcss">
.icon path {
  fill: currentColor;
}
</style>
