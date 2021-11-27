<template>
  <div>

    <h1>{{block.template}}</h1>
    {{block}}
    {{faqs}}

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
      faqs: []
    }
  },
  async fetch() {
    this.faqs = await this.$content('faqs').sortBy('date_added', 'desc').fetch()
  }
}
</script>
