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
      // console.log(this.$store.state.focus)
      if (this.$store.state.focus === true) {
        input_card_list.dora = name;
        this.getDoraName(name);
        // console.log(input_card_list.dora);
      } else if (listLength < 14 && this.$store.state.focus === false) {
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
      } else {
        alert('入力数が超えています');
      }
    },
    getDoraName(name) {
      this.$emit('doraName', name);
    },
  },
};
</script>

<style lang="scss" scoped>
.c-keybord{
  &_hai{
    display: inline-block;
    margin: 2px;
    height: 60px;
    @media screen and (min-width: 900px) {
      height: 100px;
      width: 70px;
    }
    & img{
      object-fit: contain;
      height: 100%;

    }
  }
}
</style>
