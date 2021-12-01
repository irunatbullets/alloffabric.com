<template>
  <panel :color="block.color">
    <div class="content-section">
      <h1>{{block.title}}</h1>
      <p class="intro">{{block.intro}}</p>
      <div v-html="$md.render(block.text)"></div>
      <div v-for="(section, index) in block.sections" :key="index">
        <component :is="section.template" :props="section" />
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
.content-section {
  padding: 20px;
}
</style>
