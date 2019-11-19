<template>
  <ul>
    <li class="index" v-for="(card, index) in cards" :key="index">
      <img :src="getImageUrl(card)">
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
    dora: ''
  };
  },
  methods:{
    getImageUrl(obj){
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
</style>
