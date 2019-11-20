<template>
  <div class="c-haipai">
    <div class="c-haipai_selected">
      <CardList></CardList>
    </div>
    <div class="c-haipai_keybord">
      <AddCards @doraName="dora_change"></AddCards>
    </div>
    <div class="c-haipai_rightset">
      <div class="c-haipai_dora" v-on:click="switchFocusTrue">
        <Dora :dora="dora"></Dora>
      </div>
      <div class="c-haipai_button"></div>
    </div>
  </div>
  <!-- <button v-on:click="submit"></button> -->
</template>
<script>
import AddCards from '@/components/AddCards.vue';
import CardList from '@/components/CardList.vue';
import Dora from '@/components/Dora.vue';

export default {
    name: 'haipai',
    components: { AddCards, CardList, Dora },
    data() {
      return{
        dora: null,
      };
    },
    methods: {
      dora_change(getDoraName) {
        this.dora = getDoraName;
      },
      switchFocusTrue() {
        this.$store.commit('switchFocus', true);
      },
    },
    components: { AddCards, CardList, Dora },
};
</script>

<style lang="scss" scoped>
.c-haipai{
  display: block;
  height: 75%;
  position: relative;
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
  &_rightset{
    display: inline-block;
    height: 60%;
    width: 25%;
    position: relative;
  }
  &_dora{
    position: absolute;
    display: inline-block;
    width: 50px;
    height: 60px;
    background-color: #f4f4f4;
    border: 4px solid #e8e8e8;
    margin-left: -10%;
    top: 0;
  }
}
</style>
