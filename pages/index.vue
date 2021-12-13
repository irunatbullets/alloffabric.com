<template>
  <div class="test">

    <!-- <div v-for="(block, index) in page.blocks" :key="index" style="margin-bottom: 20px;">

        {{block.title}}
        <div v-if="block.modpacks">
          <div v-for="(modpack, index2) in block.modpacks" :key="index2">
            {{modpack}}
          </div>
        </div>

    </div> -->

    <header data-header>
      <h1>Navigation</h1>
    </header>

    <component
      :is="block.template"
      v-for="(block, index) in page.blocks"
      :id="blockID(block)"
      :key="index"
      :props="block"
    />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const page = await $content('home').fetch()
    return {
      page
    }
  },
  methods: {
    blockID(block) {
      return `${block.title.toLowerCase().replace(/\s/g, '-')}`
    }
  }
}
</script>

<style lang="postcss">
[data-header] {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
}

[data-theme='red'] {
  & h1 {
    color: yellow;
  }
}

[data-theme='purple'] {
  & h1 {
    color: green;
  }
}

[data-theme='green'] {
  & h1 {
    color: orange;
  }
}

[data-theme='blue'] {
  & h1 {
    color: white;
  }
}

[data-theme='alt-red'] {
  & h1 {
    color: black;
  }
}

</style>
