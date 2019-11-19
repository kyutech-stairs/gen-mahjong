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
      const listLength = input_card_list.cards.length;
      if (listLength < 14) {
        input_card_list.cards.push(name);
        // console.log(input_card_list.cards);
      }
      else if (listLength === 14 && input_card_list.dora === null) {
        input_card_list.dora = name;
        // console.log(input_card_list.dora);
      }
      else {
        alert('入力数が超えています');
      }
    },
  },
};
</script>

<style scoped>
.index{
  display: inline-block
}
</style>
