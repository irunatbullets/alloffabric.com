<template>
  <panel :color="block.color">
    <h1>{{block.title}}</h1>
    <p class="intro">{{block.intro}}</p>
    <div>
      {{ block.text }}
    </div>
    <div v-for="(section, index) in block.sections" :key="index">
      <component :is="section.template" :props="section" />
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
