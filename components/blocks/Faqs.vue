<template>
  <div>

    <h1>{{block.title}}</h1>
    <p class="intro">{{block.intro}}</p>
    <div>
      {{ block.text }}
    </div>

    <div v-for="(faq, index) in faqs" :key="index">
      <h2>{{faq.title}}</h2>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="$md.render(faq.answer)"></div>
      <a v-if="faq.file" :href="faq.file">{{ $fileName(faq.file) }}</a>
    </div>

  </div>
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
