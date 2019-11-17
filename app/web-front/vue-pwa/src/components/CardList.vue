<template>
  <div>
		<div v-for="card in cards" :key="card">
			<div>

			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'CardList',
  data: {
    cards: [],
    dora: '',
  },
  methods: {
    updateValue(e) {
      this.$emit('input', e.target.value);
    },
  },
};
</script>
