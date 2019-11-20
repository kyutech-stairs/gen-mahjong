<template>
  <ul>
    <template v-for="(card, index) in cards">
      <template v-for="n in card.amount">
        <li class="index" :key="`${n}${index}`">
          <img :src="getImageUrl(card.hai)">
        </li>
      </template>
    </template>
    <br>
    <li class="doraIndex" :key="dora">
      <img :src="getImageUrl(dora)">
    </li>
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

<style scoped>
.index{
  display: inline-block
}
.doraIndex{
  display: inline-block
}
</style>
