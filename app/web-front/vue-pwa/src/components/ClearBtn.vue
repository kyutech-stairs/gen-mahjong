<template>
    <button class="resetbtn" @click="reset_cards">リセット</button>
</template>

<script>
import input_card_list from './InputCardList';

export default {
  name: 'ClearBtn',
  data() {
    return {
      input_lists: input_card_list,
    };
  },
  methods: {
    reset_cards() {
      const listLength = input_card_list.cards.reduce((a, x) => a += x.amount, 0);
      for (let i = 0; i < listLength; i++) {
        input_card_list.cards.pop();
      }
      input_card_list.dora = null;
      this.getDoraName(null);
    },
    getDoraName(name) {
      this.$emit('doraName', name);
    },
  },
};
</script>
<style>
.resetbtn{
  width: 100%;
  height: 40px;
  font-size: 20px;
  border-radius: 50px;
  background: #68c4f5;
  border: none;
  color: white;
  filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.16));
}
</style>
