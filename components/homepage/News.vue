<template>
  <div>
<!--
    {{block.template}}

    {{ctas}}
 -->
  </div>
</template>

<script>
export default {
  props: {
    props: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      block: this.props,
      ctas: []
    }
  },
  async fetch () {
    this.ctas = await this.$content('ctas').fetch()
  },
}
</script>
