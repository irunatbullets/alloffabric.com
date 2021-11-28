<template>
  <panel :color="block.color">
    <hero :title="block.title" :text="block.text" :link="block.button" />
    <stats :stats="block.stats" />
  </panel>
</template>

<script>
export default {
  props: {
    props: {
      type: Object,
      default: () => ({})
    },
  },
  data() {
    return {
      block: this.props,
    }
  },
}
</script>
