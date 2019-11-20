<template>
  <div class="c-haipai">
    <div class="c-haipai_selected">
      <CardList></CardList>
    </div>
    <div class="c-haipai_keybord">
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
    components: { AddCards, CardList},
};
</script>

<style lang="scss" scoped>
.c-haipai{
  display: block;
  height: 75%;
  &_selected{
    width: 90%;
    height: 30%;
    border-radius: 10px;
    background-color: #f4f4f4;
    border: 4px solid #e8e8e8;
    opacity: 0.89;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.16);
    left: 50%;
    transform: translateX(-50%);
    position: relative;
  }
  &_keybord{
    display: inline-block;
    left: 5%;
    position: relative;
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
    width: 65%;
    min-height: 30px;
    height: 60%;
    background: #dedbdb;
    border: 4px solid #e8e8e8;
    border-radius: 5px;
    filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.16));
    overflow: scroll;
  }
}
</style>
