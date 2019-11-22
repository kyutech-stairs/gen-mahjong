<template>
  <fieldset>
    <template v-for="(option, index) in options">
      <label :key="index">
        <input
          type="radio"
          :name="name"
          :value="option.value"
          @change="updateValue"
        />{{ option.label }}
      </label>
    </template>
  </fieldset>
</template>

<script>
export default {
  name: 'MyRadio',
  props: {
    options: { type: Array, require: true },
    name: { type: String, require: true },
  },
  methods: {
    updateValue(e) {
      if (this.name === 'own-wind') {
        this.$store.commit('switchOwnWind', e.target.value);
      } else {
        this.$store.commit('switchGroundWind', e.target.value);
      }
    },
  },
};
</script>
