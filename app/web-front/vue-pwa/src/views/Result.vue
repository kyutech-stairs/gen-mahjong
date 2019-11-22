<template>
  <div class="c-result">
    <div class="c-result_document">
      <section class="c-result_document_kei">
        <div class="c-result_document_kei_title">
          {{ agari[resignation].title }}
        </div>
        <div class="c-resule_document_kei_content">
          {{ agari[resignation].overview }}
        </div>
      </section>
      <section>
        <div>
          ポイント
        </div>
        <div>
          {{ agari[resignation].point[point] }}
        </div>
      </section>
      <section>
        <div>
          オススメ役
        </div>
        <ul>
          <li v-for="(value, index) in agari[resignation].yaku" :key="index">
            <div>
              {{ value.name }}
            </div>
            <div>
              {{ value.star }}
            </div>
          </li>
        </ul>
      </section>
    </div>
    <a href="./">ホームに戻る</a>
  </div>
</template>
<script>
import out_put_data from '../components/OutPutData';
import InputCards from '@/components/InputCardList';
import axios from 'axios';
import store from '../store';

export default {
  name: 'result',
  data() {
    return {
      agari: out_put_data.agari,
      point: null,
      resignation: null,
      post_data: {
        haipai: InputCards.cards,
        dora: {
          name: InputCards.dora,
        },
        ground: {
          name: store.getters.groundWind,
        },
        own: {
          name: store.getters.ownWind,
        },
      },
    };
  },
  mounted() {
    console.log(JSON.stringify(InputCards.cards));
    const axiosApi = axios.create({
      headers: {
        'Content-Type': 'application/json',
      },
    });
    axiosApi.post('http://127.0.0.1:8000/genapp/', JSON.stringify(this.post_data))
    .then((response) => {
      this.point = response.data.point;
      this.resignation = response.data.res;
    });
  },
};
</script>

<style lang="scss" scoped>
.c-result{
  top: 7.9%;
  width: 86%;
  height: 84%;
  position: relative;
  font-family: Tanuki-Permanent-Marker;
  &_document{
    height: 72%;
    color: #ffffff;
    // text-align: left;
    &_kei{
      &_title{
      }
      &_document{

      }
    }
  }
}
</style>

