<template>
  <div>
    <div v-for="card in cards" v-bind:key="card">
    <li>{{ card }}</li>
    </div>
  </div>
</template>

<script>
import CardList from '@/components/CardList.vue';
import cards from './CardKind';

export default {
  name: 'AddCards',
  components: {
    CardList,
  },
  data: {
    cards: [ cards ],
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
