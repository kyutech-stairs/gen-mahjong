<template>
  <div class="input">
		<div class="selected">
		</div>
		<div class="index">
		</div>
  </div>
	<!-- <button v-on:click="submit"></button> -->
</template>
<script>
import AddCards from '@/components/AddCards.vue';
export default {
	name: 'Input',
	components: {
		AddCards
	},
}
</script>