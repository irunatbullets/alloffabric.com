<template>
  <component
    :is="element"
    :href="href"
    :class="[{
      'button--red': color === 'red',
      'button--white': color === 'white',
    }, extraClasses]"
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
        default: 'red'
      },
      extraClasses: {
        type: String,
        default: ''
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
  min-width: min-content;
  font-size: clamp(13px, calc(13 / 375 * 100vw), 16px);
  font-weight: 900;
  line-height: 1;
  padding: clamp(13px, calc(13 / 375 * 100vw), 20px) clamp(30px, calc(30 / 375 * 100vw), 40px);
  text-align: center;
  text-transform: uppercase;
  transition: box-shadow 75ms ease-in-out;
  user-select: none;
  white-space: nowrap;

  &:hover {
    box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.125);
  }
}

.button--red {
  color: white;
  background: #F0414E;
}

.button--white {
  color: var(--aof-red);
  background: white;
}
</style>
