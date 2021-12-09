<template>
  <div class="test">
    <!-- <header class="site-header">
      <a href="/" class="site-header__link"><icon name="aof-logo" extra-classes="site-header__logo" /></a>
    </header> -->

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
/* .site-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  mix-blend-mode: overlay;
}

.site-header__link::before {
  position: absolute;
  top: -162px;
  left: -180px;
  content: '';
  display: block;
  margin-left: calc(40 / 375 * 100vw);
  width: 313px;
  height: 313px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 9999px;
}

.site-header__logo {
  position: relative;
  width: 70px;
  height: 70px;
  z-index: 1;
  margin: 20px calc(40 / 375 * 100vw);
  color: white;
}

@media (--desktop) {
  .site-header__logo {
    width: auto;
    height: auto;
    margin: 40px calc(40 / 1440 * 100vw);
  }

  .site-header__link::before {
    top: -200px;
    width: 420px;
    height: 420px;
    margin-left: calc(40 / 1440 * 100vw);
  }
} */
</style>
