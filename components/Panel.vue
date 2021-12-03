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
  display: flex;
  align-items: center;
  width: 100%;
  scroll-snap-align: start;

  @media (--phone) {
    min-height: 100vh;
    padding-top: clamp(60px, 16vw, 130px);
    padding-bottom: clamp(60px, 16vw, 80px);
  }
}

.panel--red {
  background: var(--aof-red);
}
.panel--orange {
  background: var(--aof-red);
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
.panel--alt-red {
  background: #FC6E5E;
}

</style>
