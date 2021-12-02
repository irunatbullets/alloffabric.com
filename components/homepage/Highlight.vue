<template>
  <panel :color="block.color">
    <div class="highlight">
      <h1 class="highlight__title">{{block.title}}</h1>
      <p class="highlight__intro intro">{{block.intro}}</p>
      <div class="highlight__image">
        <img :src="block.image" alt="" />
      </div>
      <div class="highlight__content" v-html="$md.render(block.text)"></div>
      <action
          v-if="block.button.url && block.button.text"
          :href="block.button.url"
          :color="block.button.color"
          extra-classes="highlight__button"
          >{{ block.button.text }}</action
        >
      <div class="highlight__text-blocks">
        <component :is="section.template" v-for="(section, index) in block.sections" :key="index" :props="section" />
      </div>
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
.highlight {
  padding: 20px;

  @media (--phone) {
    display: grid;
    grid-template-columns: repeat(9, minmax(0, 1fr));
    padding: 0;
  }
}

.highlight__title {
  @media (--phone) {
    grid-column: 2 / span 7;
    line-height: 0.95;
  }
}

.highlight__intro {
  @media (--phone) {
    grid-column: 3 / span 6;
  }
}

.highlight__image {
  margin-bottom: 20px;
  @media (--phone) {
    grid-column: 1 / span 8;
  }
}

.highlight__content {
  @media (--phone) {
    grid-column: 3 / span 6;
  }
}

.highlight__button {
  @media (--phone) {
    grid-column: 3 / span 1;
  }
}

.highlight__text-blocks {
  margin-top: 20px;

  @media (--phone) {
    margin-top: 60px;
    grid-column: 1 / span 9;
  }
}

.highlight__text-blocks > :last-child {
  margin-bottom: 0;
}

</style>
