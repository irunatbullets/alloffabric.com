<template>
  <panel :color="modpackColor">
    <div class="modpack">
      <div class="modpack__image">
        <img :src="image" :alt="title + ' title screen'" class="modpack__image" data-aos="fade-up" data-aos-mirror="true" />
      </div>
      <div class="modpack__details">
        <h2 class="modpack__title">{{ title }}</h2>
        <p class="modpack__description">{{ description }}</p>
        <categories :categories="categories" extra-classes="modpack__categories" />
        <p class="modpack__summary">Minecraft MODPACK<br/>{{ modCount }}+ Mods</p>
        <action :href="button.url" :color="button.color" extra-classes="modpack__action">{{button.text}}</action>
      </div>
    </div>
  </panel>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    categories: {
      type: Object,
      default: () => ({}),
    },
    modCount: {
      type: Number,
      default: 0
    },
    button: {
      type: Object,
      default:() => ({
        'color': 'red',
        'text': 'Click',
        'url': '#'
      })
    },
    color: {
      type: String,
      default: 'white'
    }
  },
  computed: {
    modpackColor() {
      return this.color === 'red' ? 'alt-red' : this.color
    }
  }
}
</script>

<style lang="postcss">
.modpack {
  @media (--phone) {
    display: grid;
    grid-template-columns: repeat(9, minmax(0, 1fr));
  }

  @media (--desktop) {
    gap: 20px;
    align-items: center;
  }
}

.modpack__image {
  @media (--phone) {
    grid-column: span 9 / span 9;
    order: 9999;
  }

  @media (--desktop) {
    grid-row: 1;
    grid-column: 3 / span 7;
    order: 0;
    padding-left: 4.652777777777778%;
    padding-right: 4.652777777777778%;
  }
}

.modpack__details {
  padding: 15px 20px 20px;
  z-index: 1;

  @media (--phone) {
    display: grid;
    grid-column: 3 / span 6;
    grid-template-columns: subgrid;
    padding: 0;
    margin-bottom: 30px;
  }

  @media (--desktop) {
    display: block;
    grid-column: 2 / span 2;
    grid-row: 1;
    margin-bottom: 0;
  }
}

.modpack__title,
.modpack__description,
.modpack__summary {
  @media (--phone) {
    grid-column: 2 / span 5;
  }
}

.modpack__action {
  grid-column: 2 / span 1;
}

.modpack__description,
.modpack__summary {
  max-width: 40ch;
}

.modpack__categories {
  @media (--phone) {
    align-self: center;
    order: -9999;
    grid-row: 1 / span 4;
    justify-self: flex-end;
    margin-right: 17px;
    margin-bottom: 0;
    flex-flow: column;
  }

  @media (--desktop) {
    margin-bottom: revert;
    flex-flow: row;
  }
}

.modpack__summary {
  font-size: 18px;
  font-weight: 900;
  margin-bottom: 16px;

  @media (--desktop) {
    font-size: 24px;
    margin-bottom: 34px;
  }
}

.modpack__type {
  text-transform: uppercase;
}
</style>
