<template>
  <panel :color="block.color">

    <div class="highlight">

      <section-header
        :title="block.title"
        :intro="block.intro"
        :image="block.image"
        :text="block.text"
        :button="block.button"
        extra-classes="highlight__section-header"
      />

      <div class="highlight__text-blocks">
        <component :is="section.template" v-for="(section, index) in block.sections" :key="index" :props="section" extra-classes="highlight__text-block" data-aos="fade-up" />
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
  width: 100%;
}

@media (--phone) {
  .highlight {
    padding: 0;
  }
}

@media (--desktop) {
  .highlight {
    display: grid;
    grid-template-columns: repeat(9, minmax(0, 1fr));
    gap: 0 20px;
  }

  .highlight__text-blocks {
    grid-row: 1 / span 5;
    grid-column: 6 / span 4;

    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-gap: 0 20px;
  }

  .highlight__text-block {
    grid-column: 2 / span 3;
  }

  .highlight__text-block + .highlight__text-block {
    grid-column: 1 / span 3;
  }
}

</style>
