<template>
  <div>
    <h2>{{block.title}}</h2>
    <p>{{block.text}}</p>
    <action v-if="button.url && button.text" :href="button.url" :color="button.color">{{button.text}}</action>
    <img v-if="block.image" :src="imgSrc()" alt="" />
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
  methods: {
    imgSrc() {
      const imgName = this.block.image.replace('/', '');
      return require(`~/assets/uploads/${imgName}`)
    }
  },
}
</script>
