<template>
  <button @click="changeNumber">Change</button>
  <button @click="number = 10">Change to 10</button>
  {{ number }}

  <v-switch :case="number">
    <template 
      v-for="num in numbers"
      v-slot:[num]
    >
      Number: {{ num }}
    </template>

    <template #default>
      Default
    </template>
  </v-switch>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import VSwitch from '../dist/v-switch.esm-bundler'

export default defineComponent({
  components: {
    VSwitch
  },

  setup() {
    const number = ref(1)
    const numbers = [1,2,3,4,5]

    const changeNumber = () => {
      const rand = Math.ceil(Math.random() * 5)
      number.value = rand
    }

    return {
      changeNumber,
      number,
      numbers
    }
  }
})
</script>
