<template>
  <div>
    <h1>{{block.title}}</h1>
    <p>{{block.text}}</p>
    <action :color="buttonColor">{{button.text}}</action>
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
      button: this.props.button
    }
  },
  computed: {
    buttonColor() {
      return this.button.color.toLowerCase().trim();
    }
  }
}
</script>
