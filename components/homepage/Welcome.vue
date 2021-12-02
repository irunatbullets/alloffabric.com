<template>
  <panel :color="block.color">
    <div class="welcome">
      <div class="welcome__image">
        <img :src="block.image" alt="" />
      </div>
      <h1 class="welcome__title">{{ block.title }}</h1>
      <div class="welcome__content">
        <div class="welcome__text" v-html="$md.render(block.text)"></div>
        <action
          :href="block.button.url"
          :color="block.button.color"
          extra-classes="welcome__button"
          >{{ block.button.text }}</action
        >
      </div>
      <stats :stats="block.stats" extra-classes="welcome__stats" />
    </div>
  </panel>
</template>

<script>
export default {
  props: {
    props: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      block: this.props
    }
  }
}
</script>

<style lang="postcss">
.welcome {
  padding: 20px;
  width: 100%;

  @media (--phone) {
    display: grid;
    grid-template-columns: repeat(9, minmax(0, 1fr));
    grid-auto-rows: minmax(min-content, max-content);
    padding: 0;
  }

  @media (--desktop) {
    gap: 20px;
  }
}

.welcome__image {
  margin-bottom: 16px;

  @media (--phone) {
    grid-column: 1 / span 9;
    grid-row: 1;
    padding-left: 20px;
    padding-right: 20px;
    margin: 0 auto;
  }

  @media (--tablet) {
    grid-column: 2 / span 7;
  }

  @media (--desktop) {
    grid-column: 4 / span 4;
    grid-row: 1 / span 3;
    padding-left: 0;
    padding-right: 0;
  }
}

.welcome__title {
  @media (--phone) {
    grid-column: 2 / span 7;
    grid-row: 2;
    margin-top: -95px;
  }

  @media (--desktop) {
    grid-column-start: 2;
    grid-row: 1;
    margin-top: 100px;
  }
}

.welcome__content {
  margin-bottom: 16px;

  @media (--phone) {
    grid-column: 5 / span 5;
    grid-row: 3;
    order: 9999;
    margin-left: 10px;
    margin-right: 20px;
    max-width: 40ch;
  }

  @media (--desktop) {
    grid-column: 2 / span 3;
    grid-row: 2;
    display: grid;
    grid-template-columns: subgrid;
    grid-auto-rows: minmax(min-content, max-content);
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 0;
    align-items: start;
  }
}

.welcome__text {
  margin-bottom: clamp(20px, 5vw, 30px);

  @media (--desktop) {
    order: 9999;
    grid-column: 2 / span 2;
    margin-bottom: 0;
  }
}

.welcome__button {
  @media (--desktop) {
    grid-column: 1 / span 1;
    align-self: top;
    /* Nuxt doesn't allow me to control the load order of css from other
    /* components, so I'm having to use !important to override a component
    /* that should be loaded before this file... smh */
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
}

.welcome__stats {
  margin-bottom: 0;

  @media (--phone) {
    display: block;
    grid-column: 2 / span 3;
    grid-row: 3;
    margin-top: clamp(34px, 9vw, 44px);
    margin-right: 2.666666666666667%;
  }

  @media (--desktop) {
    grid-column: -3 / span 2;
    grid-row: 1 / span 2;
    margin-right: 0;
  }
}
</style>
