<template>
  <ul>
    <li class="index" v-for="(value, name) in cards" :key="name" @click="addCard(name)" role="button">
       <img :src="value" >
    </li>
  </ul>
</template>

<script>
import card_kind from './CardKind';
import input_card_list from './InputCardList';

export default {
  name: 'AddCards',
  data() {
    return{
       cards: card_kind.hai,
    };
  },
  methods: {
    addCard(name) {
      input_card_list.cards.push(name);
      // console.log(input_card_list.cards);
    },
  },
};
</script>

<style scoped>
.index{
  display: inline-block
}
</style>
