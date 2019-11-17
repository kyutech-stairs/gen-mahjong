<template>
  <div class="c-setting">

    <div class="c-setting_dora">
      <h3 class="c-setting_dora_title">ドラ</h3>
      <a href="/input">
        <div class="c-setting_dora-box">
          <img class="c-setting_dora-image" src="../assets/blank_cell.svg" alt="dora">
        </div>
      </a>
    </div>

    <div class="self">
      <h3>自風</h3>
      <MyRadio v-model="sampleForm.radio" name="sample-radio" :options="options"></MyRadio>
    </div>
    <div class="place">
      <h3>場風</h3>
      <MyRadio v-model="sampleForm.radio" name="sample-radio" :options="options"></MyRadio>
    </div>

    <div class="first-hai">
      <h3>初期牌</h3>
      <a href="/input">
        <div class="first-hai-box">
        </div>
      </a>
    </div>

  </div>
</template>

<script>
import MyRadio from '@/components/RadioButton.vue';

export default {
  name: 'setting',
  components: {
    MyRadio,
  },
  data() {
    return {
      input: {
        selected: true,
      },
      sampleForm: {
        text: '',
        radio: '',
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
  },
};
</script>

<style lang="scss" scoped>
.c-setting{
  &_dora{
    &_title{
      display: inline-block;
      vertical-align: middle;
      height: 60px;
      margin-right: 10px;
    }
    &-box{
      display: inline-block;
      height: 60px;
      opacity: 0.89;
      border-radius: 10px;
      -webkit-backdrop-filter: blur(30px);
      backdrop-filter: blur(30px);
      box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, 0.16);
      border: solid 4px #e8e8e8;
      background-color: #4e4e4e;
    }
    &-image{
      object-fit: cover;
      height: 100%;
    }
  }
}
.first-hai-box {
  width: 1320px;
  height: 177px;
  opacity: 0.89;
  border-radius: 10px;
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
  box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, 0.16);
  border: solid 4px #e8e8e8;
  background-color: #4e4e4e;
}

</style>
