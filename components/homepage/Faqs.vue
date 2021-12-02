<template>
  <panel :color="block.color">
    <div class="faqs">
      <section-header
        :title="block.title"
        :intro="block.intro"
        :text="block.text"
      />
      <div v-for="(faq, index) in faqs" :key="index" class="faq">
        <h3>{{faq.title}}</h3>
        <div v-if="faq.content" v-html="$md.render(faq.content)"></div>
        <p v-if="faq.file"><a :href="faq.file" class="faq__download">{{ $fileName(faq.file) }}</a></p>
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
.faqs {
  padding: 20px;

  & > :last-child {
    margin-bottom: 0;
  }

  @media (--phone) {
    padding: 0;
    display: grid;
    grid-template-columns: repeat(9, minmax(0, 1fr));
  }
}

.faq {
  position: relative;
  padding-bottom: 20px;
  margin-bottom: 27px;
  grid-column: 2 / span 7;

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

.faq__download {
  display: inline-block;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 3px;
  padding: 10px 15px;

  &:hover {
    border-color: rgba(255, 255, 255, 1);
  }
}

</style>
