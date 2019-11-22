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
    value_change_method: '',
  },
  methods: {
    updateValue(e) {
      this.$store.commit(value_change_method, e.target.value);
    },
  },
};
</script>
