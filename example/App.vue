<template>
  <button @click="changeNumber">Random number (1-10)</button>
  <button @click="number = 11">Set to 11 (invalid)</button>
  <p>Current: {{ number }}</p>

  <v-switch :case="number">
    <template 
      v-for="num in numbers" 
      v-slot:[num] 
      :key="num"
    >
      <h4>{{ num }}</h4>
    </template>
    <template #default>
      Default
    </template>
  </v-switch>

</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { VSwitch } from './v-switch'

export default defineComponent({
  components: {
    VSwitch
  },

  setup() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const number = ref(1)
    const changeNumber = () => {
      const rand = Math.ceil(Math.random() * 5)
      number.value = numbers[rand]
    }

    const size = ref<'small' | 'big' | 'invalid'>('small')
    return {
      size,
      numbers,
      number,
      changeNumber
    }
  }
})
</script>