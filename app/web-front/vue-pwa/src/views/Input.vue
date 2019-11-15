<template>
  <div class="input">
		<div class="selected">

		</div>
		<div class="index">
			<AddCard></AddCard>
		</div>
  </div>
	<!-- <button v-on:click="submit"></button> -->
</template>

<script>
import AddCard from '@/components/AddCards.vue';

</script>

<style scoped>
.selected {
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
.index {
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
