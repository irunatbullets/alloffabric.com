<template>
  <dl class="stats" :class="extraClasses">
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
    },
    extraClasses: {
      type: String,
      default: '',
    }
  }
}
</script>

<style lang="postcss">
.stats__item {
  margin-bottom: clamp(12px, calc(12 / 375 * 100vw), 30px);

  &:last-child {
    margin-bottom: 0;
  }
}

.stats__title {
  font-size: clamp(32px, calc(32 / 375 * 100vw), 60px);
  font-weight: 900;
  line-height: 1;
  margin-bottom: clamp(3px, 0.09375em, 12px);
}

.stats__text {
  font-size: clamp(13px, calc(13 / 375 * 100vw), 18px);
  margin-left: 0;
  max-width: 18ch;
}
</style>
