<template>
    <ul v-if="categories && categories.length" class="categories" :class="extraClasses">
      <li v-for="(category, index) in categories" :key="category" class="categories__item">
        <icon :name="iconNames[index]" />
      </li>
    </ul>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      default: () => [],
      required: true
    },
    extraClasses: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconNames() {
      return [...this.categories].map(category => category.toLowerCase().replace(' ', '-'));
    },
  }
}
</script>

<style lang="postcss">
.categories {
  list-style: none;
  display: inline-flex;
  gap: 18px;
  margin-bottom: 16px;
  padding-left: 0;
}
</style>
