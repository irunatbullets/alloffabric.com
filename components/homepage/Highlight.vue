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
  }
}

.highlight__text-blocks {
  margin-top: 20px;

  @media (--phone) {
    margin-top: 30px;
    grid-column: 1 / span 9;
  }
}

.highlight__text-blocks > :last-child {
  margin-bottom: 0;
}

</style>
