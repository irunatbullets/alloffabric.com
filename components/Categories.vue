<template>
  <ul
    v-if="categoryArray && categoryArray.length"
    class="categories"
    :class="extraClasses"
  >
    <li
      v-for="(category, index) in categoryArray"
      :key="index"
      class="categories__item"
      data-aos="zoom-in"
      data-aos-delay="75"
      data-aos-duration="600"
    >
      <icon :name="category" />
    </li>
  </ul>
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
    categoryArray() {
      return Object.keys(this.categories).filter(
        (category) => this.categories[category]
      )
    }
  }
}
</script>

<style lang="postcss">
.categories {
  list-style: none;
  display: flex;
  gap: 10px;
  margin-bottom: var(--clamp-10-16);
  padding-left: 0;

  @media (--desktop) {
    gap: 18px;
  }
}
</style>
