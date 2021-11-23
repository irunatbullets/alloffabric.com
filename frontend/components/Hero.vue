<template>
  <div class="hero">
    <h1 class="hero__title">{{title}}</h1>
    <div class="hero__inner">
      <div class="hero__content">
        {{text}}
      </div>
      <div v-if="link.text && link.url" class="hero__link">
        <p><action :href="link.url" color="white">{{link.text}}</action></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    link: {
      type: Object,
      required: false,
      default: () => ({
        text: '',
        url: ''
      })
    }
  }
}
</script>

<style lang="postcss">
.hero__title {
  margin-bottom: 30px;
}

.hero__inner {
  display: flex;
  justify-content: space-between;
}

.hero__link {
  order: -9999;
  margin-right: 30px;
}
</style>
