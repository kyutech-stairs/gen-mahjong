<template>
  <div>
    <div v-for="card in cards" v-bind:key="card">
    <li>{{ card }}</li>
    </div>
  </div>
</template>

<script>
import CardList from '@/components/CardList.vue';

export default {
  name: 'AddCards',
  components: {
    CardList,
  },
  data: {
    cards: [
      { value: '1m' },
      { value: '2m' },
      { value: '3m' },
      { value: '4m' },
      { value: '5m' },
      { value: '6m' },
      { value: '7m' },
      { value: '8m' },
      { value: '9m' },
      { value: '1s' },
      { value: '2s' },
      { value: '3s' },
      { value: '4s' },
      { value: '5s' },
      { value: '6s' },
      { value: '7s' },
      { value: '8s' },
      { value: '9s' },
      { value: '1p' },
      { value: '2p' },
      { value: '3p' },
      { value: '4p' },
      { value: '5p' },
      { value: '6p' },
      { value: '7p' },
      { value: '8p' },
      { value: '9p' },
      { value: 'a' },
      { value: 'b' },
      { value: 'c' },
      { value: 'd' },
      { value: 'e' },
      { value: 'f' },
      { value: 'g' },
      { value: 'a5m' },
      { value: 'a5s' },
      { value: 'a5p' },
      { value: 'dd' },
    ],
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
