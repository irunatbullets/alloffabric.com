<template>
  <div>{{homepage}}</div>
</template>

<script>
export default {
  data () {
    return {
      homepage: null,
      error: null
    }
  },
  async mounted () {
    try {
      this.homepage = await this.$strapi.$homepage.find()
    } catch (error) {
      this.error = error
    }
  }
}
</script>
