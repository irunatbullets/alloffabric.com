<template>
  <div>

    {{block.title}}

    <div v-for="(product, index) in products" :key="index">
      <product
        :type="product.type"
        :name="product.name"
        :img="product.image"
        :description="product.description"
        :categories="[
          'Exploration',
          'Extra large',
          'Magic',
          'Quests',
          'Tech'
        ]"
        :mod-count="product.mod_count"
      />
    </div>

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
      products: []
    }
  },
  async fetch () {
    this.products = await this.$content('products').sortBy('release_date', 'desc').fetch()
  },
}
</script>
