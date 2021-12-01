<template>
  <div :class="panelClasses">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '',
    },
  },
  computed: {
    panelClasses() {
      return this.color ? `panel panel--${this.color}` : 'panel'
    }
  }
}
</script>

<style lang="postcss">
.panel {
  color: white;
  min-height: 100vh;
}

.panel--red {
  background: var(--aof-red);
}
.panel--orange {
  background: var(--aof-orange);
}
.panel--yellow {
  background: var(--aof-yellow);
}
.panel--green {
  background: var(--aof-green);
}
.panel--blue {
  background: var(--aof-blue);
}
.panel--purple {
  background: var(--aof-purple);
}
.panel--pink {
  background: var(--aof-pink);
}

</style>
