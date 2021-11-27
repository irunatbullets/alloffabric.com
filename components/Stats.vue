<template>
  <dl class="stats">
    <div v-for="(stat, index) in stats" :key="index" class="stats__item">
      <dt class="stats__title">{{stat.title}}</dt>
      <dd class="stats__text">{{stat.text}}</dd>
    </div>
  </dl>
</template>

<script>
export default {
  props: {
    stats: {
      type: Array,
      default: () => ([
        {
          'title': '',
          'text': ''
        }
      ])
    }
  }
}
</script>

<style lang="postcss">
.stats__item {
  margin-bottom: 30px;
}

.stats__title {
  font-size: 60px;
  font-weight: 900;
  line-height: 1;
  margin-bottom: 12px;
}

.stats__text {
  font-size: 18px;
  margin-left: 0;
}
</style>
