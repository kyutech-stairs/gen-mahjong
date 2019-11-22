<template>
  <img v-if="dora === null" src="/img/blank_cell.svg" alt="blank">
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
img{
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
