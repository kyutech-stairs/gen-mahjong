<template>
  <div class="c-setting">
    <div class="c-setting_top">
      <div class="c-setting_dora">
        <h3 class="c-setting_dora_title">ドラ</h3>
        <router-link class="c-setting_dora-box" to="/haipai">
          <template v-if="InputDora">
            <img class="c-setting_dora-image" :src="card_kind.hai[InputDora]" alt="dora">
          </template>
          <template v-else>
            <img class="c-setting_dora-image" src="../../public/img/blank_cell.svg" alt="dora">
          </template>
        </router-link>
      </div>
      <div class="c-setting_wind">
        <div class="c-setting_wind-own">
          <h3 class="c-setting_wind-own_title">自風</h3>
          <MyRadio class="c-setting_wind-own_select" name="own-wind" :options="options"></MyRadio>
        </div>
        <div class="c-setting_wind-ground">
          <h3 class="c-setting_wind-ground_title">場風</h3>
          <MyRadio class="c-setting_wind-ground_select" name="ground-wind" :options="options"></MyRadio>
        </div>
      </div>
    </div>

    <div class="c-setting_haipai">
      <h3 class="c-setting_haipai-title">配牌</h3>
      <router-link class="c-setting_haipai-box" to="/haipai">
        <ul :class="switchHaipaiClass(InputCard.length)">
          <template v-if="!InputCard.length">
            <li class="c-setting_haipai-list-item" v-for="n in 14" v-bind:key="n">
              <img class="c-setting_haipai-list-item-image" src="/img/blank_cell.svg" alt="hai">
            </li>
          </template>
          <template v-else>
            <template v-for="card in InputCard">
              <template v-for="n in card.amount">
                <li class="c-setting_haipai-list-item" v-bind:key="`${card.hai}-${n}`">
                  <img class="c-setting_haipai-list-item-image" :src="card_kind.hai[card.hai]" alt="hai">
                </li>
              </template>
            </template>
          </template>
        </ul>
      </router-link>
    </div>
    <div v-if="examData()">
      <router-link class="c-setting_submit" to="/result">データ送信</router-link>
    </div>
    <div v-else class="c-setting_alert">
      配牌とドラの入力が完了していません
    </div>
  </div>
</template>

<script>
import MyRadio from '@/components/RadioButton.vue';
import InputCardList from '@/components/InputCardList';
import CardKind from '@/components/CardKind';

export default {
  name: 'setting',
  components: {
    MyRadio,
  },
  data() {
    return {
      classHaipaiSelected: 'c-setting_haipai-list selected',
      classHaipai: 'c-setting_haipai-list',
      InputCard: InputCardList.cards,
      InputDora: InputCardList.dora,
      card_kind: CardKind,
      input: {
        selected: true,
      },
      items: [
        { id: 1, hai: '/img/blank_cell.svg' },
        { id: 2, hai: '/img/blank_cell.svg' },
        { id: 3, hai: '/img/blank_cell.svg' },
        { id: 4, hai: '/img/blank_cell.svg' },
        { id: 5, hai: '/img/blank_cell.svg' },
        { id: 6, hai: '/img/blank_cell.svg' },
        { id: 7, hai: '/img/blank_cell.svg' },
        { id: 8, hai: '/img/blank_cell.svg' },
        { id: 9, hai: '/img/blank_cell.svg' },
        { id: 10, hai: '/img/blank_cell.svg' },
        { id: 11, hai: '/img/blank_cell.svg' },
        { id: 12, hai: '/img/blank_cell.svg' },
        { id: 13, hai: '/img/blank_cell.svg' },
        { id: 14, hai: '/img/blank_cell.svg' },
      ],
      sampleForm: {
        text: '',
        own_radio: '',
        ground_radio: '',
        // radio: '',
        select: '',
        textarea: '',
        checkbox: [],
      },
      options: [
        {
          label: '東',
          value: 'a',
        },
        {
          label: '南',
          value: 'b',
        },
        {
          label: '西',
          value: 'c',
        },
        {
          label: '北',
          value: 'd',
        },
      ],
    };
  },
  methods: {
    sendForm() {
      // formデータの送信処理
    },
    switchHaipaiClass(isHaipai) {
      if (isHaipai) {
        return this.classHaipaiSelected;
      } else {
        return this.classHaipai;
      }
    },
    examData() {
      const listLength = InputCardList.cards.reduce((a, x) => a += x.amount, 0);
      const isDora = InputCardList.dora;
      if (listLength === 14 && isDora !== null) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
%btn-propaty{
  box-sizing: border-box;
  height: 40px;
  font-size: 20px;
  border-radius: 50px;
  padding: 10px 7px 2px 7px;
  background-color: #68c4f5;
  border: none;
  color: white;
  filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.16));
}
.c-setting{
   font-size: 25px;
   color: white;
   padding-top: 7%;
   box-sizing: border-box;
  &_top{
    display: flex;
    justify-content: space-around;
    height: 50%;
  }
  &_dora{
    display: inline-block;
    height: 40%;
    &_title{
      display: inline-block;
      vertical-align: middle;
      height: 80px;
      margin-right: 10px;
    }
    &-box{
      display: inline-block;
      height: 80px;
      width: 60px;
      opacity: 0.89;
      border-radius: 10px;
      -webkit-backdrop-filter: blur(30px);
      backdrop-filter: blur(30px);
      box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, 0.16);
      border: solid 4px #e8e8e8;
      background-color: #4e4e4e;
    }
    &-image{
      object-fit: contain;
      height: 100%;
    }
  }
  &_wind{
    display: inline-block;
    height: 100%;
    padding-top: 3%;
    &-own{
      margin-top: 5px;
      margin-bottom: 10px;
      &_title{
        display: inline-block;
        margin-right: 10px;
      }
      &_select{
        display: inline-block;
      }
    }
    &-ground{
      &_title{
        display: inline-block;
        margin-right: 10px;
      }
      &_select{
        display: inline-block;
      }
    }
  }
  &_haipai{
    margin-top: 1%;
    &-title{
      display: inline-block;
      height: 60px;
      margin-right: 10px;
      vertical-align: middle;
    }
    &-box{
      display: inline-block;
      width: 85%;
      height: 60px;
      opacity: 0.89;
      border-radius: 10px;
      -webkit-backdrop-filter: blur(30px);
      backdrop-filter: blur(30px);
      box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, 0.16);
      border: solid 4px #e8e8e8;
      background-color: #4e4e4e;
    }
    &-list{
      height: 100%;
      display: flex;
      justify-content: space-around;
      &.selected{
        justify-content: center;
      }
      &-item{
        width: 7%;
        margin-top: 5px;
        list-style: none;
        display: inline-block;
        &-image{
          height: 90%;
          object-fit: cover;
        }
      }
    }
  }
  &_submit{
    @extend %btn-propaty;
    position: absolute;
    display: block;
    text-decoration: none;
    color: white;
    width: 30%;
    left: 50%;
    transform: translateX(-50%);
  }
  &_alert{
    margin-top: 5%;
    font-family: Tanuki-Permanent-Marker;
    text-align:  center;
    color: white;
  }
}

</style>
