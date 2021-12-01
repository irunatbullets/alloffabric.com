<template>
  <panel :color="color">
    <div class="modpack">
      <img :src="image" :alt="title + ' title screen'" class="modpack__image" />
      <div class="modpack__details">
        <h2 class="modpack__name">{{ title }}</h2>
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
        'color': 'orange',
        'text': 'Click',
        'url': '#'
      })
    },
    color: {
      type: String,
      default: 'white'
    }
  },
}
</script>

<style lang="postcss">



.modpack {
  display: grid;
  grid-template-columns: repeat(9, minmax(0, 1fr));
}

.modpack__image {
  grid-column: span 9 / span 9;
  width: 100%;
}

.modpack__details {
  display: grid;
  grid-column: 3 / span 6;
  grid-template-columns: subgrid;
  grid-auto-rows: minmax(min-content, max-content);

  @media (--large-desktop) {
    display: block;
  }
}

.modpack__title,
.modpack__description,
.modpack__summary {
  grid-column: 2 / span 5;
}

.modpack__title {
  grid-row: 1;
}

.modpack__description {
  grid-row: 2;
}

.modpack__summary {
  grid-row: 3;
}

.modpack__action {
  grid-column: 2 / span 3;
  grid-row: 4;
}

.modpack__categories {
  align-self: center;
  order: -9999;
  grid-row: 1 / span 4;
  justify-self: flex-end;
  /* margin-right: max(17px, 22.05882352941176%); */
  margin-right: 17px;
  flex-flow: column;

  @media (--large-desktop) {
    margin-bottom: 16px;
    flex-flow: row;
  }
}

/* .modpack {
  @media (--laptop) {
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    grid-template-rows: 1;
  }
}

.modpack__image {
  @media (--laptop) {
    grid-column: 3 / span 10;
    grid-row: 1;
  }

  @media (--large-desktop) {
    margin-left: 30px;
  }
}

.modpack__details {
  @media (--laptop) {
    padding-top: 20px;
    grid-column: 1 / span 3;
    grid-row: 1;
    z-index: 3;
  }

  @media (--large-desktop) {
    padding-top: 32px;
  }
}
 */
.modpack__summary {
  font-size: 18px;
  font-weight: 900;
  margin-bottom: 16px;

  @media (--large-desktop) {
    font-size: 24px;
    margin-bottom: 34px;
  }
}

.modpack__type {
  text-transform: uppercase;
}
</style>
