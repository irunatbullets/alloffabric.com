<template>
  <div class="text-block" :class="extraClasses">
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
      default: () => ({}),
    },
    extraClasses: {
      type: String,
      default: '',
    }
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
  margin-top: 20px;
}

@media (--phone){
  .text-block {
    margin-top: 60px;
    display: grid;
    grid-template-columns: repeat(9, minmax(0, 1fr));
    align-items: start;

    & > :last-child:not(.text-block__image) {margin-bottom: 0;}
  }

  .text-block__title {
    grid-column: 2 / span 7;
    max-width: 15ch;
  }

  .text-block__content {
    grid-column: 2 / span 7;
    margin-bottom: clamp(20px, calc(20 / 375 * 100vw), 22px);
    max-width: 40ch;

    & > :last-child {margin-bottom: 0;}
  }

  .text-block__image {
    grid-column: 4 / span 6;
    order: -9999;
    justify-self: end;
    margin-bottom: clamp(20px, calc(20 / 375 * 100vw), 80px);
    max-width: clamp(205px, calc(205 / 375 * 100vw), 305px);
  }

  .text-block__button {
    grid-column: 2;
  }

  .text-block + .text-block {
    & .text-block__title,
    & .text-block__content,
    & .text-block__button {
      grid-column-start: 3;
    }

    & .text-block__title,
    & .text-block__content {
      grid-column-end: span 6;
    }
  }
}

@media (--tablet) {
  .text-block__title,
  .text-block__content {
    grid-column-end: span 5;
  }

  .text-block__image {
    grid-column: 7 / span 3;
    grid-row: 1 / span 3;
    order: 9999;
    justify-self: start;
    margin-bottom: 0;
    margin-top: 0;
  }

  .text-block + .text-block {
    & .text-block__title,
    & .text-block__content,
    & .text-block__button {
      grid-column-start: 4;
    }

    & .text-block__title,
    & .text-block__content {
      grid-column-end: span 5;
    }
  }
}

@media (--laptop) {
  .text-block__title,
  .text-block__content {
    grid-column-end: span 4;
  }

  .text-block__image {
    grid-column-start: 6;
    justify-self: end;
  }

  .text-block + .text-block {
    margin-top: 0;

    & .text-block__title,
    & .text-block__content,
    & .text-block__button {
      grid-column-start: 5;
    }

    & .text-block__title,
    & .text-block__content {
      grid-column-end: span 4;
    }
  }
}

@media (--desktop) {
  .text-block {
    display: block;
  }

  .text-block__content {
    max-width: 37ch;
  }

  .text-block + .text-block {
    margin-top: 60px;
  }
}

</style>
