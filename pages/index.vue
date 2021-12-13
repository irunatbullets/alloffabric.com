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

    <header class="navigation" data-header>
      <nuxt-link to="/" class="navigation__home"><div class="navigation__spot"><icon name="aof-logo" /></div></nuxt-link>
      <ul class="navigation__list">
        <li v-for="(block, index) in page.blocks" :key="index" class="navigation__item">
          <nuxt-link :to="`#${blockID(block)}`" class="navigation__link">{{block.short_name}}</nuxt-link>
        </li>
      </ul>
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
      return `${block.short_name.toLowerCase().replace(/\s/g, '-')}`
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

[data-theme] {color: white;}
[data-theme='white'] {color: black;}
/* [data-theme='red'] {color: yellow;}
[data-theme='purple'] {color: green;}
[data-theme='green'] {color: orange;}
[data-theme='blue'] {color: white;}
[data-theme='alt-red'] {color: black;} */

.navigation {
  display: grid;
  grid-template-columns: repeat(9, minmax(0, 1fr));
  align-items: center;
  margin-top: 22px;

  width: 100%;

  @media (--desktop) {
    gap: 0 20px;
    margin-top: 30px;
  }
}

.navigation__home {
  grid-column-start: 1;
  justify-self: end;
}

.navigation__list {
  grid-column: 4 / span 6;
  display: contents;
  list-style: none;
}

.navigation__item:nth-child(1) {
  grid-column: 4;
}

.navigation__item {
  white-space: nowrap;
  font-weight: var(--bold);
  text-transform: uppercase;
}

.navigation__spot {
  background-color: #F2414E;
  border-radius: 9999px;
  padding: 2px;
}

.navigation__link {
  /* background-color: transparent;
  padding: 2px 6px;
  border-radius: 4px; */
  padding: 20px;
  margin-left: -20px;
  position: relative;

  /* &::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 100%;
    top: -100px;
    background-color: #F2414E;
  } */
}

[data-theme='purple'] .navigation__spot {background-color: #64369F;}
[data-theme='green'] .navigation__spot {background-color: #59C78B;}
[data-theme='blue'] .navigation__spot {background-color: #71CCC9;}
[data-theme='alt-red'] .navigation__spot {background-color: #FFA197;}
[data-theme='yellow'] .navigation__spot {background-color: #FFD78A;}
[data-theme='pink'] .navigation__spot {background-color: #FFB4AF;}

/* [data-theme='red'] .navigation__link {background-color: var(--aof-red)}
[data-theme='purple'] .navigation__link {background-color: var(--aof-purple);}
[data-theme='green'] .navigation__link {background-color: var(--aof-green);}
[data-theme='blue'] .navigation__link {background-color: var(--aof-blue);}
[data-theme='alt-red'] .navigation__link {background-color: #FC6E5E;}
[data-theme='yellow'] .navigation__link {background-color: var(--aof-yellow);}
[data-theme='pink'] .navigation__link {background-color: var(--aof-pink);} */

</style>
