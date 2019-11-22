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
export default {
  name: 'result',
  data() {
    return {
      title: out_put_data.title,
      overview: out_put_data.overview,
      advice: out_put_data.advice,
      yaku_name: out_put_data.yaku_name,
      star_number: out_put_data.star_number,
    };
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

