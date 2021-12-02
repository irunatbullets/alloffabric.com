<template>
  <header class="section-header">
      <h1 class="section-header__title">{{title}}</h1>
      <p v-if="intro" class="section-header__section-header intro">{{intro}}</p>
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
}

.section-header__title {
  @media (--phone) {
    grid-column: 2 / span 7;
    line-height: 0.95;
  }
}

.section-header__section-header {
  @media (--phone) {
    grid-column: 3 / span 6;
  }
}

.section-header__image {
  margin-bottom: 20px;
  @media (--phone) {
    grid-column: 1 / span 8;
  }
}

.section-header__content {
  @media (--phone) {
    grid-column: 3 / span 6;
  }
}

.section-header__button {
  @media (--phone) {
    grid-column: 3 / span 1;
  }
}
</style>
