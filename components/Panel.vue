<template>
  <div class="panel" :data-panel="color" :data-id="dataID">
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
    dataID: {
      type: String,
      default: ''
    }
  },
  mounted() {
    const panels = [...document.querySelectorAll('[data-panel]')]
    const header = document.querySelector('[data-header]')

    let prevYPosition = 0
    let direction = 'up'

    const options = {
      rootMargin: `${header.offsetHeight / 2 * -1}px`,
      threshold: 0,
    }

    const getTargetPanel = (entry) => {
      const index = panels.findIndex((panel) => panel === entry.target)

      if (index >= panels.length - 1) {
      return entry.target
      } else {
      return panels[index + 1]
      }
    }

    const updateColors = (target) => {
      const theme = target.dataset.panel
      header.setAttribute('data-theme', theme)
    }

    const shouldUpdate = (entry) => {
      if (direction === 'down' && !entry.isIntersecting) {
        return true
      }

      if (direction === 'up' && entry.isIntersecting) {
        return true
      }

      return false
    }

    const onIntersect = (entries) => {
      entries.forEach((entry) => {
        if (window.scrollY > prevYPosition) {
          direction = 'down'
        } else {
          direction = 'up'
        }

        prevYPosition = window.scrollY

        const target = direction === 'down' ? getTargetPanel(entry) : entry.target

        if (shouldUpdate(entry)) {
          updateColors(target)
          // updateMarker(target)
        }
      })
    }

    document.addEventListener('readystatechange', e => {
      // if (e.target.readyState === 'complete') {
      //   updateMarker(sections[0])
      // }
    })

    const observer = new IntersectionObserver(onIntersect, options)

    panels.forEach((panel) => {
      observer.observe(panel)
    })
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
    padding-top: 152px;
    padding-bottom: 80px;
  }
}

[data-panel='red'] {
  background: var(--aof-red);
}

[data-panel='orange'] {
  background: var(--aof-red);
}

[data-panel='yellow'] {
  background: var(--aof-yellow);
}

[data-panel='green'] {
  background: var(--aof-green);
}

[data-panel='blue'] {
  background: var(--aof-blue);
}

[data-panel='purple'] {
  background: var(--aof-purple);
}

[data-panel='pink'] {
  background: var(--aof-pink);
}

[data-panel='alt-red'] {
  background: #FC6E5E;
}

</style>
