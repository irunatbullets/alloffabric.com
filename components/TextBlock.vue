<template>
  <div class="text-block">
    <h2 class="text-block__title">{{block.title}}</h2>
    <div class="text-block__content" v-html="$md.render(block.text)"></div>
    <action v-if="button.url && button.text" :href="button.url" :color="button.color" extra-classes="text-block__button">{{button.text}}</action>
    <img v-if="block.image" :src="block.image" alt="" class="text-block__image" />
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
}
</script>

<style lang="postcss">
.text-block {
  margin-bottom: 20px;

  @media (--phone) {
    margin-bottom: 60px;
    display: grid;
    grid-template-columns: repeat(9, minmax(0, 1fr));
  }
}

.text-block__title {
  @media (--phone) {
    grid-column: 2 / span 7;
  }
}

.text-block__content {
  @media (--phone) {
    grid-column: 2 / span 7;
  }
}

.text-block__content > :last-child {
  margin-bottom: 0;
}

.text-block__button {
  margin-top: 10px;
  @media (--phone) {
    grid-column: 2 / span 1;
    margin-top: 20px;
  }
}

.text-block__image {
  margin: 20px 0;
  @media (--phone) {
    order: -9999;
    grid-column: 4 / span 6;
    margin-top: 0;
  }
}

.text-block + .text-block {
  & .text-block__title,
  & .text-block__content {
    grid-column: 3 / span 6;
  }

  & .text-block__button {
    grid-column-start: 3;
  }
}

</style>
