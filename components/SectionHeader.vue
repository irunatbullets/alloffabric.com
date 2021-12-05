<template>
  <header class="section-header">
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
    }
  }
}
</script>

<style lang="postcss">
.section-header {
  @media (--phone) {
    display: grid;
    grid-template-columns: repeat(9, minmax(0, 1fr));
    grid-column: 1 / span 9;
    margin-bottom: 30px;
  }

  @media (--desktop) {
    grid-template-columns: subgrid;
    grid-gap: 0 20px;
    grid-column: 1 / span 7;
    align-content: start;
    grid-row: 1;
  }
}

.section-header__title {
  @media (--phone) {
    grid-column: 2 / span 7;
    line-height: 0.95;
  }

  @media (--desktop) {
    grid-column: 2 / span 3;
    grid-row: 1;
    margin-top: calc((75 / 1440) * 100vw);
  }
}

.section-header__intro {
  @media (--phone) {
    grid-column: 3 / span 6;
  }

  @media (--desktop) {
    grid-column: 2 / span 3;
    grid-row: 2;
    max-width: 30ch;
  }
}

.section-header__image {
  margin-bottom: 20px;
  @media (--phone) {
    grid-column: 1 / span 8;
  }

  @media (--desktop) {
    order: -9999;
    grid-column: 4 / span 4;
    grid-row: 1 / span 5;
    margin-bottom: 0;
  }
}

.section-header__content {

  & > :last-child {
    margin-bottom: 0;
  }

  @media (--phone) {
    grid-column: 3 / span 6;
  }

  @media (--desktop) {
    grid-column: 2 / span 2;
    grid-row: 3;
  }
}

.section-header__button {
  @media (--phone) {
    grid-column: 3 / span 1;
  }

  @media (--desktop) {
    grid-column: 2;
    grid-row: 4;
    margin-top: 26px;
  }
}
</style>
