<template>
  <img v-if="dora === null" src="/img/blank_cell.svg" alt="">
  <img v-else :src="getImageUrl(dora)" alt="dora">
</template>

<script>
import input_card_list from './InputCardList';
import card_kind from './CardKind';

export default {
  name: 'dora',
  props: ['dora'],
  methods: {
    getImageUrl(obj) {
      const url = card_kind.hai[obj];
      return url;
    },
  },
};
</script>

<style>

</style>
