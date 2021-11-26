<template>
  <div>

    <icon name="aof-logo" />

    <hero :title="block.title" :text="block.text" :link="block.button" />

    <!--
      <h1>{{block.title}}</h1>
      <p>{{block.text}}</p>
      <action :color="buttonColor">{{button.text}}</action>
    -->

    <stats :stats="block.stats" />

  </div>
</template>

<script>
export default {
  props: {
    props: {
      type: Object,
      default: () => ({})
    },
  },
  data() {
    return {
      block: this.props,
    }
  },
}
</script>
