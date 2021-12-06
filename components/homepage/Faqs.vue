<template>
  <panel :color="block.color">
    <div class="faq">
      <section-header
        :title="block.title"
        :intro="block.intro"
        :text="block.text"
      />
      <div class="faqs">
        <div v-for="(faq, index) in faqs" :key="index" class="faqs__item">
          <h3>{{faq.title}}</h3>
          <div v-if="faq.content" v-html="$md.render(faq.content)"></div>
          <p v-if="faq.file"><a :href="faq.file" class="faqs__download">{{ $fileName(faq.file) }}</a></p>
        </div>
      </div>
    </div>
  </panel>
</template>

<script>
export default {
  props: {
    props: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      block: this.props,
      faqs: []
    }
  },
  async fetch() {
    this.faqs = await this.$content('faqs').sortBy('date_added', 'desc').fetch()
  },
}
</script>

<style lang="postcss">
.faq {
  padding: 20px;

  & > :last-child {
    margin-bottom: 0;
  }
}

.faqs {
  margin-top: 30px;
}

.faqs__item {
  position: relative;
  padding-bottom: 20px;
  margin-bottom: 27px;

  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: white;
    width: 80px;
    height: 1px;
  }
}

.faqs__download {
  display: inline-block;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 3px;
  padding: 10px 15px;

  &:hover {
    border-color: rgba(255, 255, 255, 1);
  }
}

@media (--phone) {
  .faq {
    padding: 0;
  }

  .faqs {
    display: grid;
    grid-template-columns: repeat(9, minmax(0, 1fr));
    margin-top: calc(30 / 375 * 100vw);
  }

  .faqs__item {
    grid-column: 2 / span 7;
  }
}

@media (--desktop) {
  .faq {
    display: grid;
    grid-template-columns: repeat(9, minmax(0, 1fr));
    gap: 0 20px;
  }

  .faqs {
    grid-column: 5 / span 4;
    grid-row: 1 / span 5;
    margin: 0 calc(70 / 1440 * -100vw);
  }
}

</style>
