<template>
  <div class="about">
		<div class="dora">
			<h3>ドラ</h3>
			<a href="/input">
				<div class="dora-box">
					<div v-if="input.selected">最初に表示される要素</div>
  				<div v-else>切り替え後に表示される要素</div>
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
					<div v-if="input.selected">最初に表示される要素</div>
  				<div v-else>切り替え後に表示される要素</div>
				</div>
			</a>
		</div>
	</div>
</template>

<script>
import MyRadio from '@/components/RadioButton.vue';

export default {
  name: 'about',
  components: {
    MyRadio
	},
	data() {
    return {
			input: {
				selected: true
			},
      sampleForm: {
        text: "",
        radio: "",
        select: "",
        textarea: "",
        checkbox: []
      },
      options: [
        {
          label: "東",
          value: "a"
        },
        {
          label: "南",
          value: "b"
        },
        {
          label: "西",
          value: "c"
				},
				{
          label: "北",
          value: "d"
        }
      ]
    };
  },
  methods: {
    sendForm() {
      // formデータの送信処理
    }
  },
};
</script>

<style scoped>
.dora-box {
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