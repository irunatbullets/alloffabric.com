<template>
  <div>
    <h1 class="modpacks__title">{{block.title}}</h1>
    <modpack
      v-for="(modpack, index) in modpacks"
      :key="index"
      :type="modpack.type"
      :title="modpack.title"
      :image="modpack.image"
      :description="modpack.description"
      :categories="modpack.categories"
      :mod-count="modpack.mod_count"
      :button="modpack.button"
      :color="modpack.color"
    />
  </div>
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
      modpacks: [],
    }
  },
  async fetch () {
    this.modpacks = await this.$content('modpacks').sortBy('release_date', 'desc').fetch()
  },
}
</script>

<style lang="postcss">
.modpacks__title {
  margin-top: 15px;
}
</style>
