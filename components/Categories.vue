<template>
<div>
    <ul v-if="categoryArray && categoryArray.length" class="categories" :class="extraClasses">
      <li v-for="(category, index) in categoryArray" :key="category" class="categories__item">
        <icon :name="iconNames[index]" />
      </li>
    </ul>
    </div>
</template>

<script>
export default {
  props: {
    categories: {
      type: Object,
      default: () => ({}),
      required: true
    },
    extraClasses: {
      type: String,
      default: ''
    }
  },
  computed: {
    categoryArray () {
      return Object.keys(this.categories).filter(category => this.categories[category])
    },
    iconNames () {
      return [...this.categoryArray].map(category => category.toLowerCase().replace(' ', '-'));
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
