<template>
  <div class="test">
    <component
      :is="block.template"
      v-for="(block, index) in page.blocks"
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
  }
}
</script>

<style lang="postcss">

</style>
