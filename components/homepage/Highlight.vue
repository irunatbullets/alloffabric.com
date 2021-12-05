<template>
  <panel :color="block.color">
    <div class="highlight">
      <section-header
        :title="block.title"
        :intro="block.intro"
        :image="block.image"
        :text="block.text"
        :button="block.button"
      />
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
    grid-gap: 0 20px;
  }
}

.highlight__text-blocks {
  margin-top: 20px;

  @media (--phone) {
    margin-top: 30px;
    grid-column: 1 / span 9;
  }

  @media (--desktop) {
    display: grid;
    grid-template-columns: subgrid;
    grid-column: 6 / span 4;
    grid-row: 1;
    margin-top: calc((60 / 1440) * 100vw);
  }
}

.highlight__text-blocks > :last-child {
  margin-bottom: 0;
}

</style>
