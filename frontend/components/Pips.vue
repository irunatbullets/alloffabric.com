<template>
  <nav class="pips">
    <h2 class="sr-only">Page section links</h2>
    <ol class="pips__list">
      <li><a href="#" class="pips__link"><span class="sr-only">Item 1</span></a></li>
      <li><a href="#" class="pips__link"><span class="sr-only">Item 2</span></a></li>
    </ol>
  </nav>
</template>

<style lang="postcss">
.pips {
  /* Dunno if this is needed really? */
}

.pips__list {
  display: flex;
  flex-flow: column;
  align-items: center;
  list-style: none;
  padding-left: 0;
  margin-bottom: 0;
}

.pips__link {
  display: block;
  padding: 18px;

  &::after {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    background: black;
    border-radius: 100%;
  }

  &:hover::after {
    background: var(--aof-red);
  }
}



</style>
