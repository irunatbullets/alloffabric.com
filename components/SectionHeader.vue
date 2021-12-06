<template>
  <header class="section-header" :class="extraClasses">
      <h1 class="section-header__title">{{title}}</h1>
      <p v-if="intro" class="section-header__intro intro">{{intro}}</p>
      <div v-if="image" class="section-header__image">
        <img :src="image" alt="" />
      </div>
      <div v-if="text" class="section-header__content" v-html="$md.render(text)"></div>
      <action
        v-if="button.url && button.text"
        :href="button.url"
        :color="button.color"
        extra-classes="section-header__button"
      >{{ button.text }}</action>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    intro: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    button: {
      type: Object,
      default: () => ({
        url: '',
        text: '',
        color: 'red'
      })
    },
    extraClasses: {
      type: String,
      default: '',
    }
  }
}
</script>

<style lang="postcss">
.section-header {
  & > :last-child {margin-bottom: 0;}
}

.section-header__intro,
.section-header__image,
.section-header__content {
  max-width: clamp(334px, calc(334 / 375 * 100vw), 630px);
}

.section-header__image {
  margin-bottom: clamp(20px, calc(20 / 375 * 100vw), 26px);
}

.section-header__content {
  margin-bottom: clamp(20px, calc(20 / 375 * 100vw), 26px);

  & > :last-child {margin-bottom: 0;}
}

@media (--phone) {
  .section-header {
    display: grid;
    grid-template-columns: repeat(9, minmax(0, 1fr));
    align-items: start;
  }

  .section-header__title {
    grid-column: 2 / span 7;
  }

  .section-header__intro {
    grid-column: 3 / span 6;
  }

  .section-header__image {
    grid-column: 1 / span 8;
  }

  .section-header__content {
    grid-column: 3 / span 6;
  }

  .section-header__button {
    grid-column: 3;
  }
}

@media (--tablet) {
  .section-header__image {
    grid-column: 3 / span 6;
  }
}

@media (--desktop) {
  .section-header {
    display: contents;
  }

  .section-header__title,
  .section-header__intro,
  .section-header__content,
  .section-header__button {
    grid-column-start: 2;
  }

  .section-header__title,
  .section-header__intro,
  .section-header__content {
    grid-column-end: span 3;
  }

  .section-header__title {
    grid-row: 1;
    margin-top: 60px;
  }

  .section-header__intro {
    grid-row: 2;
    max-width: 20ch;
  }

  .section-header__content {
    grid-row: 3;
    max-width: 30ch;
  }

  .section-header__button {
    grid-row: 4;
  }

  .section-header__image {
    order: -9999;
    grid-column: 4 / span 4;
    grid-row: 1 / span 5;
    margin-bottom: 0;
  }
}
</style>
