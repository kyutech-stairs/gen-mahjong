<template>
  <div class="c-result">
    <div class="c-result_document">
      <section class="c-result_document_kei">
        <div class="c-result_document_kei_title">
          {{ title }}
        </div>
        <div class="c-resule_document_kei_content">
          {{ overview }}
        </div>
      </section>
      <section>
        <div>
          ポイント
        </div>
        <div>
          {{ advice }}
        </div>
      </section>
      <section>
        <div>
          オススメ役
        </div>
        <ul>
          <li>
            <div>
              {{ yaku_name }}
            </div>
            <div>
              {{ star_number }}
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
import axios from 'axios';

export default {
  name: 'result',
  data() {
    return {
      title: out_put_data.title,
      overview: out_put_data.overview,
      advice: out_put_data.advice,
      yaku_name: out_put_data.yaku_name,
      star_number: out_put_data.star_number,
      info: null,
      post_data: {
        haipai: [
          {name: '1m', amount: 1},
          {name: '2m', amount: 1},
          {name: '3m', amount: 1},
          {name: '4m', amount: 1},
          {name: '5m', amount: 1},
          {name: '6m', amount: 1},
          {name: '7m', amount: 1},
          {name: '8m', amount: 1},
          {name: '9m', amount: 1},
          {name: '1s', amount: 1},
          {name: '2s', amount: 1},
          {name: '3s', amount: 1},
          {name: '4s', amount: 1},
          {name: '5s', amount: 1},
        ],
        dora:{
          name: '7s',
        },
        ground:{
          name: 'a',
        },
        own: {
          name: 'a',
        },
      },
    };
  },
  mounted() {
    const axiosApi = axios.create({
      headers: {
        'Content-Type':'application/json',
      },
    });
    console.log(JSON.stringify(this.post_data));
    axiosApi.post('http://127.0.0.1:8000/genapp/', JSON.stringify(this.post_data))
    .then(response => (this.info = response));
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

