<template>
  <div class="c-result">
    <div class="c-result_document">
      <section class="c-result_document_kei">
        <h2 class="c-result_document_kei_title">
          {{ agari[resignation].title }}
        </h2>
        <div class="c-result_document_kei_content">
          {{ agari[resignation].overview }}
        </div>
      </section>
      <section>
        <div class="c-result_document_point_title">
          ポイント
        </div>
        <div class="c-result_document_point_content">
          {{ agari[resignation].point[point] }}
        </div>
      </section>
      <section class="c-result_document_recommendation">
        <div class="c-result_document_recommendation_title">
          オススメ役
        </div>
        <ul class="c-result_document_recommendation_list">
          <li class="c-result_document_recommendation_list-item" v-for="(value, index) in agari[resignation].yaku" :key="index">
            <span class="c-result_document_recommendation_list-item-name">{{ value.name }}</span>
            <span class="c-result_document_recommendation_list-item-star">{{ value.star }}</span>
          </li>
        </ul>
      </section>
    </div>
    <a class="c-result_return" href="./">ホームに戻る</a>
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
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url("/img/background/resultPage.png");
  background-size: cover;
  font-family: "Noto Sans JP";
  &_document{
    $title_font-size: 30px;
    $content_font-size: 20px;
    %title-set{
      font-size: $title_font-size;
      margin-top: 3%;
    }
    box-sizing: border-box;
    padding: 5% 5%;
    color: #ffffff;
    text-align: left;
    &_kei{
      &_title{
        font-size: 55px;
      }
      &_content{
        font-size: $content_font-size;
      }
    }
    &_point{
      &_title{
        @extend %title-set;
      }
      &_content{
        font-size: $content_font-size;
      }
    }
    &_recommendation{
      height: 20vh;
      display: block;
      &_title{
        @extend %title-set;
      }
      &_list{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        height: 100%;
        &-item{
          display: inline-block;
          width: 48%;
          &-name{
            display: inline-block;
            width: 60%;
          }
          &-star{
            display: inline-block;
            width: 35%;
          }
        }
      }
    }
  }
  &_return{
    color: white;
    font-size: 18px;
  }
}
</style>

