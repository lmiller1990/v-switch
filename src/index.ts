import { defineComponent, h } from 'vue'

export const VSwitch = defineComponent({
  name: 'v-switch',
  setup(props, { slots }) {
    console.log(props)
    console.log(slots)
    return () => h('div', 'ok')
  }
})