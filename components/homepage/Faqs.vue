<template>
  <panel :color="block.color">
    <div class="faqs">
      <h1>{{block.title}}</h1>
      <p class="intro">{{block.intro}}</p>
      <div v-html="$md.render(block.text)"></div>
      <div v-for="(faq, index) in faqs" :key="index" class="faq">
        <h3>{{faq.title}}</h3>
        <div v-html="$md.render(faq.content)"></div>
        <a v-if="faq.file" :href="faq.file">{{ $fileName(faq.file) }}</a>
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
}

.faq {
  margin-bottom: 27px;
}
</style>
