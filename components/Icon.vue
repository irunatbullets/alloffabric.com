<template>
  <component :is="icon" class="icon" :class="extraClasses" />
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    extraClasses: {
      type: String,
      default: ''
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
