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
  name: 'CardList',
  data() {
    return{
      cards: input_card_list,
      dora: '',
    };
  },
};
</script>
