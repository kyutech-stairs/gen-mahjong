<template>
  <div class="input">
    <div class="selected">
    </div>
		<div>
			<AddCards></AddCards>
		</div>
  </div>
  <!-- <button v-on:click="submit"></button> -->
</template>
<script>
import AddCards from '@/components/AddCards.vue';
export default {
    name: 'haipai',
    components: { AddCards },
};
</script>
