<template>
  <ul class="c-selected">
    <template v-for="(card, index) in cards">
      <template v-for="n in card.amount">
        <li class="c-selected_hai" :key="`${n}${index}`">
          <img class="c-selected_hai-image" :src="getImageUrl(card.hai)">
        </li>
      </template>
    </template>
    <br>
    <div class="doraIndex" :key="dora">
      <img :src="getImageUrl(dora)">
    </div>
  </ul>
</template>

<script>
import card_kind from './CardKind';
import input_card_list from './InputCardList';

export default {
  name: 'CardList',
  data() {
  return{
    cards: input_card_list.cards,
    dora: input_card_list.dora,
  };
  },
  methods: {
    getImageUrl(obj) {
      const url = card_kind.hai[obj];
      return url;
    },
  },
};
</script>

<style lang="scss" scoped>
.c-selected{
  overflow-x: scroll;
  height: 100%;
  display: flex;
  &_hai{
    display: inline-block;
    margin: 0 2px;
    &-image{}
  }
}
</style>
