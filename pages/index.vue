<template>
  <div class="test">
    <component
      :is="block.template"
      v-for="(block, index) in page.blocks"
      :id="blockID(block, index)"
      :key="index"
      :props="block"
    />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const page = await $content('home').fetch()
    return {
      page
    }
  },
  methods: {
    blockID(block, index) {
      return `${block.title.toLowerCase().replace(/\s/g, '-')}`
    }
  }
}
</script>

<style lang="postcss">

</style>
