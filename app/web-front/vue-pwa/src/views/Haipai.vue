<template>
  <div class="c-haipai">
    <div :class="switchHaipaiClass($store.getters.focusInputBox)">
      <CardList></CardList>
    </div>
    <div class="c-haipai_bottom">
      <div class="c-haipai_keybord">
        <AddCards @doraName="dora_change"></AddCards>
      </div>
      <div class="c-haipai_rightset">
        <div :class="switchDoraClass($store.getters.focusInputBox)" v-on:click="switchFocusTrue">
          <Dora :dora="dora"></Dora>
        </div>
        <div class="c-haipai_button">
          <ClearBtn @doraName="dora_change"></ClearBtn>
          <router-link to="/" class="c-haipai_move">入力完了</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AddCards from '@/components/AddCards.vue';
import CardList from '@/components/CardList.vue';
import Dora from '@/components/Dora.vue';
import ClearBtn from '@/components/ClearBtn.vue';
import InputCardList from '@/components/InputCardList';

export default {
  name: 'haipai',
  components: { AddCards, CardList, Dora, ClearBtn },
  data() {
    return{
      classHaipaiSelected: 'c-haipai_selected selected',
      classHaipai: 'c-haipai_selected',
      classDoraSelected: 'c-haipai_dora selected',
      classDora: 'c-haipai_dora',
      dora: InputCardList.dora,
    };
  },
  methods: {
    dora_change(getDoraName) {
      this.dora = getDoraName;
    },
    switchFocusTrue() {
      this.$store.commit('switchFocus', true);
    },
    switchHaipaiClass(status) {
      if (!status) {
        return this.classHaipaiSelected;
      } else {
        return this.classHaipai;
      }
    },
    switchDoraClass(status) {
      if (status) {
        return this.classDoraSelected;
      } else {
        return this.classDora;
      }

    },
  },
};
</script>

<style lang="scss" scoped>
%btn-propaty{
  box-sizing: border-box;
  margin-top: 10%;
  height: 40px;
  font-size: 20px;
  border-radius: 50px;
  padding: 10px 7px 2px 7px;
  background-color: #68c4f5;
  border: none;
  color: white;
  filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.16));
}
.c-haipai{
  top: 5%;
  display: block;
  height: 90%;
  position: relative;
  &_selected{
    width: 90%;
    height: 20%;
    border-radius: 10px;
    background-color: #f4f4f4;
    border: 4px solid #e8e8e8;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.16);
    left: 50%;
    transform: translateX(-50%);
    position: relative;
    &.selected{
      box-shadow: 0 0 0 4px rgb(64, 169, 255);
    }
  }
  &_bottom{
    display: flex;
    justify-content: center;
    height: 70%;
    margin-top: 2%;
  }
  &_keybord{
    display: inline-block;
    box-sizing: border-box;
    width: 65%;
    min-height: 30px;
    height: 100%;
    background: #dedbdb;
    border: 4px solid #e8e8e8;
    border-radius: 5px;
    filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.16));
    overflow: scroll;
  }
  &_rightset{
    box-sizing: border-box;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 25%;
  }
  &_dora{
    box-sizing: border-box;
    margin-left: 50%;
    transform: translateX(-50%);
    width: 70px;
    height: 80px;
    background-color: #f4f4f4;
    border-radius: 3px;
    @media screen and (min-width: 900px) {
      height: 150px;
      width: 120px;
    }
    &.selected{
      box-shadow: 0 0 0 4px rgb(64, 169, 255);
    }
  }
  &_button{
    display: block;
    margin-top: 20%;
    margin-left: 50%;
    transform: translateX(-50%);
    width: 80%;
  }
  &_move{
    @extend %btn-propaty;
    text-decoration: none;
    display: block;
  }
}
</style>
