<template>
  <div :class="panelClasses">
    <div class="panel__inner">
      <slot />
    </div>
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
  margin-bottom: 10px;

  @media (--phone) {
    min-height: 100vh;
    margin-bottom: 0;
  }
}

.panel__inner {
  width: 100%;
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
