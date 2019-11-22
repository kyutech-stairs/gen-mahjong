<template>
  <fieldset>
    <template v-for="(option, index) in options">
      <label :key="index">
        <input
          type="radio"
          :name="name"
          :value="option.value"
          v-model="wind"
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
  computed: {
    wind: {
      get: function() {
        if (this.name === 'own-wind') {
          return this.$store.state.own_wind;
        } else {
          return this.$store.state.ground_wind;
        }
      },
      set: function(value) {
        if (this.name === 'own-wind') {
          this.$store.commit('switchOwnWind', value);
        } else {
          this.$store.commit('switchGroundWind', value);
        }
      }
    },
  },
};
</script>
