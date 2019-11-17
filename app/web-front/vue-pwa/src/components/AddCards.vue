<template>
  <ul>
    <li class="index" v-for="(value, name) in cards" :key="name">
       <img :src="value">
    </li>
  </ul>
</template>

<script>
import CardList from '@/components/CardList.vue';
import cards from './CardKind';

export default {
  name: 'AddCards',
  components: {
    CardList,
  },
  data() {
    return{
       cards: cards.hai,
    };
  },
  methods: {
    addCard(event) {
      CardList.cards = {
        value: this.cards.value,
      };
    },
  },
};
</script>

<style scoped>
.index{
  display: inline-block
}
</style>
