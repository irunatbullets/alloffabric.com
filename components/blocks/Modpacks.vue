<template>
  <div>
    <h1>{{block.title}}</h1>
<!--
    <panel v-for="(modpack, index) in modpacks" :key="index" :color="modpack.color">
      <div class="modpack">
        <h2>{{modpack.title}}</h2>
        <div v-html="$md.render(modpack.description)"></div>
        <categories :categories="modpack.categories" />
      </div>
    </panel>
-->

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
      modpacks: []
    }
  },
  async fetch () {
    this.modpacks = await this.$content('modpacks').sortBy('release_date', 'desc').fetch()
  },
}
</script>
