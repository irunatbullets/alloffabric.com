<template>
  <div class="test">
    <header class="navigation" data-header>
      <nuxt-link to="/" class="navigation__home"><div class="navigation__spot"><icon name="aof-logo" /></div></nuxt-link>
      <ul class="navigation__list">
        <li v-for="(block, index) in page.blocks" :key="index" class="navigation__item">
          <nuxt-link :to="`#${blockID(block)}`" class="navigation__link" :data-link="`${blockID(block)}`">{{block.short_name}}</nuxt-link>
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

.navigation {
  display: grid;
  grid-template-columns: repeat(9, minmax(0, 1fr));
  align-items: center;
  padding: 22px 0 11px;
  color: white;

  width: 100%;

  @media (--desktop) {
    gap: 0 20px;
    padding: 30px 0 15px;
  }
}

.navigation::before {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0%;
  background-color: var(--aof-red);
  z-index: -1;
  transition: background-color 600ms cubic-bezier(.25,.46,.45,.94);
  opacity: 0.75;
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
  border-radius: 9999px;
  padding: 0;
  transition: background-color 600ms cubic-bezier(.25,.46,.45,.94);
}

.navigation__link {
  padding: 20px;
  margin-left: -20px;
  position: relative;

  &::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 100%;
    top: -100px;
    transform: translateY(-100%);
    background-color: #F2414E;
    transition: transform 200ms cubic-bezier(.25,.46,.45,.94);
  }
}

[data-header='news'] [data-link='news']::before,
[data-header='about-us'] [data-link='about-us']::before,
[data-header='modpacks'] [data-link='modpacks']::before,
[data-header='community'] [data-link='community']::before,
[data-header='support-us'] [data-link='support-us']::before,
[data-header='faq'] [data-link='faq']::before  {
  transform: translateY(0);
}

[data-theme='red'].navigation::before {background-color: var(--aof-red)}
[data-theme='purple'].navigation::before {background-color: var(--aof-purple);}
[data-theme='green'].navigation::before {background-color: var(--aof-green);}
[data-theme='blue'].navigation::before {background-color: var(--aof-blue);}
[data-theme='alt-red'].navigation::before {background-color: #FC6E5E;}
[data-theme='yellow'].navigation::before {background-color: var(--aof-yellow);}
[data-theme='pink'].navigation::before {background-color: var(--aof-pink);}

</style>
