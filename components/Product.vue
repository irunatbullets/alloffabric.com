<template>
  <div class="product">
    <img :src="imgSrc()" :alt="name + ' title screen'" class="product__image" />
    <div class="product__details">
      <h2 class="product__name">{{ name }}</h2>
      <p class="product__description">{{ description }}</p>
      <categories :categories="categories" extra-classes="product__categories" />
      <p class="product__summary">Minecraft <span class="product__type">{{ type }}</span><span v-if="type === 'Modpack'"><br/>{{ modCount }}+ Mods</span></p>
      <action href="#">Play Now</action>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
      validator (value) {
        return ['Modpack', 'Mod'].includes(value)
      }
    },
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    categories: {
      type: Object,
      default: () => ({}),
    },
    modCount: {
      type: Number,
      default: 0
    }
  },
  methods: {
    imgSrc(img) {
      const imgName = this.img.replace('/', '');
      return require(`~/assets/images/${imgName}`)
    }
  },
}
</script>

<style lang="postcss">
.product {
  @media (--laptop) {
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    grid-template-rows: 1;
  }
}

.product__image {
  @media (--laptop) {
    grid-column: 3 / span 10;
    grid-row: 1;
  }

  @media (--large-desktop) {
    margin-left: 30px;
  }
}

.product__details {
  @media (--laptop) {
    padding-top: 20px;
    grid-column: 1 / span 3;
    grid-row: 1;
    z-index: 3;
  }

  @media (--large-desktop) {
    padding-top: 32px;
  }
}

.product__summary {
  font-size: 24px;
  font-weight: 900;
  margin-bottom: 34px;
}

.product__type {
  text-transform: uppercase;
}
</style>
