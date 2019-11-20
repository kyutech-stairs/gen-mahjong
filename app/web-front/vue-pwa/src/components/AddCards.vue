<template>
  <ul class="c-keybord">
    <li class="c-keybord_hai" v-for="(value, name) in cards" :key="name" @click="addCard(name)" role="button">
       <img class="c-keybord_hai_image" :src="value" >
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
      const listLength = input_card_list.cards.reduce((a, x) => a += x.amount, 0);
      if (listLength < 14) {
        const target = input_card_list.cards.findIndex((v) => v.hai === name);
        if (target === -1) {
          input_card_list.cards.push({hai: name, amount: 1});
        } else {
          if (input_card_list.cards[target].amount < 4) {
            input_card_list.cards[target].amount += 1;
          } else {
            alert('同一の牌で入力できる枚数は4牌までです');
          }
        }
        // console.log(input_card_list.cards);
      } else if (listLength === 14 && input_card_list.dora === null) {
        input_card_list.dora = name;
        // console.log(input_card_list.dora);
      } else {
        alert('入力数が超えています');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.c-keybord{
  &_hai{
    display: inline-block;
    margin: 2px;
  }
}
</style>
