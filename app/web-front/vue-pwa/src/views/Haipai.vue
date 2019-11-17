<template>
  <div class="input">
    <div class="selected">
      <!-- <CardList></CardList> -->
    </div>
    <div>
      <AddCards></AddCards>
    </div>
  </div>
  <!-- <button v-on:click="submit"></button> -->
</template>
<script>
import AddCards from '@/components/AddCards.vue';
import CardList from '@/components/CardList.vue';
export default {
    name: 'haipai',
    components: { AddCards },
};
</script>
