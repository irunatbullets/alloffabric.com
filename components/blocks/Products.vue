<template>
  <div>
    <container compact>
      <h1>{{block.title}}</h1>
    </container>
    <product
      v-for="(product, index) in products"
      :key="index"
      :type="product.type"
      :title="product.title"
      :image="product.image"
      :description="product.description"
      :categories="product.categories"
      :mod-count="product.mod_count"
      :button="product.button"
      :color="product.color"
    />
  </div>
</template>

<script>
import Container from '../Container.vue'
export default {
  components: { Container },
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
