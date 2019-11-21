<template>
  <div>
    <button class="resetbtn" @click="reset_cards">
      reset
    </button>
  </div>

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
  width: 80px;
  height: 60px;
  background-color: #f4f4f4;
  border: 4px solid #e8e8e8;
  margin-left: -10%;
}
</style>