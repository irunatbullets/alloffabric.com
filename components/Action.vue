<template>
  <component
    :is="element"
    :href="href"
    :class="{
      'button--orange': color === 'orange',
      'button--white': color === 'white',
    }"
    class="button">
    <slot/>
  </component>
</template>

<script>
  export default {
    props: {
      href: {
        type: String,
        default: null
      },
      to: {
        type: String,
        default: null
      },
      color: {
        type: String,
        default: 'orange'
      }
    },
    computed: {
      element() {
        if (this.href) {
          return 'a'
        } else {
          return 'button'
        }
      },
    }
  }
</script>

<style lang="postcss">
.button {
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  display: inline-block;
  font-size: 16px;
  font-weight: 900;
  line-height: 1;
  padding: 20px 30px;
  text-transform: uppercase;
  transition: box-shadow 75ms ease-in-out;
  user-select: none;
  white-space: nowrap;

  &:hover {
    box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.125);
  }
}

.button--orange {
  color: white;
  background: var(--aof-orange);
}

.button--white {
  color: var(--aof-red);
  background: white;
}
</style>
